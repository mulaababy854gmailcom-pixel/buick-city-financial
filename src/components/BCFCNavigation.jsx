import { NavLink, Link } from 'react-router-dom';
export const bcfcLinks = [
['/financing','Overview'],
['/financing/origination','Business-purpose origination'],
['/financing/services','Administration & servicing'],
['/financing/residential','Residential · Coming Soon'],
['/financing/inquiry','Contact & inquiry'],
];
export default function BCFCNavigation(){return <div className="bcfc-subheader"><div className="gl-container"><div className="bcfc-subbrand"><Link to="/financing">BCFC</Link><span>A Ground Lens subsidiary</span></div><nav aria-label="BCFC navigation">{bcfcLinks.map(([to,label])=><NavLink key={to} to={to} end={to==='/financing'} className={({isActive})=>isActive?'bcfc-nav-active':''}>{label}</NavLink>)}</nav></div></div>}
