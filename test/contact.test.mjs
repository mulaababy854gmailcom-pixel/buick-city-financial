import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHandler,createLimiter} from '../api/contact.js';
const env={CONTACT_ENABLED:'true',RESEND_API_KEY:'test-private-key',CONTACT_TO_EMAIL:'inbox@example.com',CONTACT_FROM_EMAIL:'website@example.com'};
const form={name:'Test Visitor',email:'visitor@example.com',organization:'',service:'origination',role:'Investor / buyer',state:'MI',consent:true,website:'',requestId:'a1234567-1234-4123-8123-123456789abc'};
const req=(body=form,extra={})=>({method:'POST',headers:{origin:'https://www.thegroundlens.com','content-type':'application/json'},body,...extra});
function res(){return {headers:{},code:0,body:null,setHeader(k,v){this.headers[k]=v;},status(n){this.code=n;return this;},json(b){this.body=b;return this;}};}
test('forwards to a server-configured mailbox without returning address or credentials',async()=>{
let sent;const handler=createHandler({env,limit:()=>true,send:async(url,options)=>{sent={url,options,body:JSON.parse(options.body)};return new Response(JSON.stringify({id:'provider-accepted-id'}),{status:200});}});
const response=res();await handler(req({...form,to:'attacker@example.com'}),response);
assert.equal(response.code,200);assert.equal(response.body.ok,true);
assert.deepEqual(sent.body.to,['inbox@example.com']);assert.equal(sent.body.reply_to,'visitor@example.com');
assert.equal(sent.options.headers['Idempotency-Key'],'bcfc-inquiry/'+form.requestId);
assert.ok(!JSON.stringify(response.body).includes('inbox@example.com'));assert.ok(!JSON.stringify(response.body).includes('test-private-key'));
});
test('provider rejection never produces success or leaks provider errors',async()=>{
const handler=createHandler({env,limit:()=>true,send:async()=>new Response(JSON.stringify({message:'private provider diagnostic'}),{status:403})});
const response=res();await handler(req(),response);assert.equal(response.code,502);assert.ok(!response.body.ok);assert.ok(!JSON.stringify(response.body).includes('private provider'));
});
test('missing configuration fails closed without calling delivery',async()=>{
const response=res();await createHandler({env:{},limit:()=>true,send:()=>{throw new Error('must not send');}})(req(),response);
assert.equal(response.code,503);assert.ok(!response.body.ok);
});
test('rejects foreign origins, missing consent, invalid fields, and filled honeypots',async()=>{
const handler=createHandler({env,limit:()=>true,send:()=>{throw new Error('must not send');}});
for(const request of [req(form,{headers:{origin:'https://attacker.example','content-type':'application/json'}}),req({...form,consent:false}),req({...form,email:'bad\r\nBcc: x@example.com'}),req({...form,website:'spam'}),req({...form,service:'unknown'})]){
const response=res();await handler(request,response);assert.ok([400,403].includes(response.code));assert.ok(!response.body.ok);
}
});
test('rate limit blocks sends and bounded limiter expires',async()=>{
const response=res();await createHandler({env,limit:()=>false})(req(),response);assert.equal(response.code,429);
const limit=createLimiter();for(let i=0;i<5;i++)assert.equal(limit('ip',1000),true);assert.equal(limit('ip',1000),false);assert.equal(limit('ip',601001),true);
});
