import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { services } from '../components/BCFCContent';
import BCFCNavigation from '../components/BCFCNavigation';
import '../bcfc.css';
export default function BCFCInquiryPage(){
const [params]=useSearchParams();const initial=params.get('service')||'';
const blank={name:'',organization:'',email:'',service:services.some(s=>s.id===initial)||initial==='residential'?initial:'',role:'',state:'',consent:false,website:''};
const [form,setForm]=useState(blank);
const [sending,setSending]=useState(false);const [error,setError]=useState('');const [receipt,setReceipt]=useState(null);
const requestId=useRef(null), heading=useRef(null);
const update=key=>event=>{setForm(current=>({...current,[key]:event.target.type==='checkbox'?event.target.checked:event.target.value}));requestId.current=null;setError('');};
useEffect(()=>{document.title='Contact BCFC | Ground Lens';},[]);
useEffect(()=>{if(receipt)heading.current?.focus();},[receipt]);
async function submit(event){
event.preventDefault();if(sending)return;setError('');setSending(true);
try {
if(!requestId.current)requestId.current=crypto.randomUUID();
const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form,requestId:requestId.current}),signal:AbortSignal.timeout(20000)});
const result=await response.json().catch(()=>null);
if(!response.ok||result?.ok!==true)throw new Error(result?.message||'We couldn’t send your inquiry. Please try again.');
setReceipt(result.reference);setForm(blank);requestId.current=null;
}catch(failure){setError(failure?.name==='TimeoutError'?'We couldn’t confirm your inquiry was sent. Your details are still here; please try again.':failure.message||'We couldn’t send your inquiry. Please try again.');}
finally{setSending(false);}
}
return <main className="bcfc-page" id="main-content" tabIndex={-1}><BCFCNavigation/>
<section className="gl-container bcfc-section bcfc-form-hero"><p className="gl-eyebrow">Contact Buick City Financial</p><h1>Let’s start<br/>a conversation.</h1><p className="bcfc-hero-copy">Tell us what you need. We’ll use your inquiry to understand the right next step.</p></section>
<section className="gl-container bcfc-section bcfc-form-layout"><aside><h2>A few details.<br/>A clear next step.</h2><p>Send a general service inquiry directly to our team. Your message is forwarded privately; no email app is required.</p><p>Please keep this first contact simple. No financial documents, Social Security numbers, account or credit information, identification, or wire instructions.</p><p className="bcfc-small">Residential mortgage products are Coming Soon. General questions about future plans are welcome.</p><Link className="bcfc-email" to="/financing">Back to BCFC overview</Link></aside>
<div className="bcfc-form">{receipt?<div><Check size={28} aria-hidden="true"/><h2 ref={heading} tabIndex={-1}>Thank you for reaching out.</h2><p className="bcfc-form-intro">Your inquiry has been submitted to our team.</p><p className="bcfc-small">Reference: {receipt}</p><button className="gl-button" onClick={()=>{setReceipt(null);setError('');}}>Send another inquiry</button></div>:<form onSubmit={submit} aria-busy={sending}><h2>Send an inquiry</h2><p className="bcfc-form-intro">All fields are required unless marked optional.</p><fieldset disabled={sending}>
<div className="bcfc-form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={update('name')}/></label><label>Email address<input name="email" autoComplete="email" type="email" required maxLength={254} value={form.email} onChange={update('email')}/></label></div>
<label>Company <span>(optional)</span><input name="organization" autoComplete="organization" maxLength={120} value={form.organization} onChange={update('organization')}/></label>
<label>Service of interest<select name="service" required value={form.service} onChange={update('service')}><option value="">Select a service</option>{services.map(s=><option key={s.id} value={s.id}>{s.title}</option>)}<option value="residential">Future residential products — Coming Soon</option></select></label>
<div className="bcfc-form-row"><label>Your role<select name="role" required value={form.role} onChange={update('role')}><option value="">Select your role</option>{['Investor / buyer','Property seller','Lender / loan owner','Professional partner','Future homebuyer / homeowner'].map(x=><option key={x}>{x}</option>)}</select></label><label>Property state<select name="state" required value={form.state} onChange={update('state')}><option value="">Select a state</option>{'AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split(' ').map(x=><option key={x}>{x}</option>)}<option>Not yet determined</option></select></label></div>
<div className="bcfc-honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')}/></label></div>
<label className="bcfc-checkbox"><input name="consent" type="checkbox" required checked={form.consent} onChange={update('consent')}/><span>I authorize Ground Lens / BCFC to use these details to respond to my inquiry. This does not enroll me in marketing calls or texts.</span></label>
<button type="submit" className="gl-button" disabled={sending}>{sending?<>Sending… <LoaderCircle size={17} aria-hidden="true"/></>:<>Send inquiry <ArrowUpRight size={17} aria-hidden="true"/></>}</button></fieldset>
{error&&<p className="bcfc-error" role="alert">{error}</p>}
<p className="bcfc-small bcfc-form-intro">A general inquiry is not a loan application or service agreement.</p></form>}
<div className="bcfc-privacy"><h3>Your information</h3><p>We use these details to assess your inquiry and respond. The form sends them through our hosting and email-delivery providers to the BCFC team. We do not collect financial documents here or enroll you in marketing.</p><p>Unsent details remain in page memory and are cleared when you refresh or close the page. Sent inquiries are retained in our business mailbox, subject to applicable recordkeeping obligations.</p></div>
</div></section></main>}
