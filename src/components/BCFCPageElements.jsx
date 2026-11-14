import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import BCFCNavigation from './BCFCNavigation';
import { InquiryLink } from './BCFCContent';
import '../bcfc.css';
export function BCFCPage({children}){return <main className="bcfc-page" id="main-content" tabIndex={-1}><BCFCNavigation/>{children}</main>}
export function PageIntro({eyebrow,title,children}){return <header className="gl-container bcfc-section bcfc-page-intro"><p className="gl-eyebrow">{eyebrow}</p><h1>{title}</h1><div className="bcfc-page-intro-copy">{children}</div></header>}
export function PageCTA({service,title='Start with the right conversation.'}){return <section className="gl-container bcfc-section bcfc-cta"><div><p className="gl-eyebrow">Your next step</p><h2>{title}</h2></div><div><p>A brief inquiry is enough to begin. No financial documents or loan application.</p><InquiryLink service={service}/><Link className="bcfc-email" to="/financing">Back to BCFC overview</Link></div></section>}
export function ServiceCard({service:s}){const Icon=s.icon;return <article className="bcfc-service"><div className="bcfc-card-top"><span>{s.number}</span><Icon size={24} aria-hidden="true"/></div><p className="bcfc-service-label">{s.label}</p><h3>{s.title}</h3><p>{s.description}</p><ul>{s.points.map(p=><li key={p}>{p}</li>)}</ul><details><summary>Scope & boundaries <span aria-hidden="true">+</span></summary><p>{s.boundary}</p></details><InquiryLink service={s.id} secondary>Discuss this service</InquiryLink></article>}
export function PageLink({to,children}){return <Link className="bcfc-text-link" to={to}>{children}<ArrowUpRight size={18} aria-hidden="true"/></Link>}
