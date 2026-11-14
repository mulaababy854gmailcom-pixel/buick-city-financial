import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildInquiry,buildMailto,recipient} from '../src/lib/inquiry.js';
test('inquiry routes only to the designated address and safely encodes reserved characters',()=>{
 const body=buildInquiry({name:'A & B? # +',email:'a@example.com',service:'processing',role:'Investor / buyer',state:'MI'});
 const url=buildMailto(body);
 assert.equal(url.split('?')[0],'mailto:'+recipient);
 const params=new URLSearchParams(url.split('?')[1]);
 assert.equal(params.get('body'),body);
 assert.equal(params.get('subject'),'BCFC service inquiry');
 assert.match(body,/Third-party loan processing/);
});
test('field newlines cannot add forged inquiry fields',()=>{
const body=buildInquiry({name:'A\r\nBcc: stranger@example.com',service:'residential'});
assert.ok(body.includes('Name: A  Bcc: stranger@example.com'));
assert.ok(!body.includes('\nBcc:'));
assert.match(body,/Coming Soon — pending licensing and approvals/);
assert.ok(!/account number|capital need|loan amount/i.test(body));
});
