import {createServer} from 'vite';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
const pages={
'/':['Ground Lens | Property research, grounded in place','Property research, site context, and project planning for thoughtful local development.'],
'/platform':['The platform | Ground Lens','Connect parcel records, property context, and project assumptions with Ground Lens.'],
'/flint':['Why Flint | Ground Lens','Property research and thoughtful local development rooted in Flint, Michigan.'],
'/financing':['BCFC | Business-purpose services · Ground Lens','BCFC is a Ground Lens subsidiary focused on business-purpose origination, administration, and processing. Residential mortgages: Coming Soon — pending licensing and approvals.'],
'/financing/origination':['Business-purpose origination | BCFC · Ground Lens','Business-purpose origination inquiries for DSCR investor, fix-and-flip, bridge, and 1–4-unit investment loans.'],
'/financing/services':['Administration, processing & servicing | BCFC · Ground Lens','Business-purpose seller-financing administration, third-party processing, and conditional servicing and escrow.'],
'/financing/residential':['Residential mortgages — Coming Soon | BCFC · Ground Lens','Planned home purchase, refinance, conventional, jumbo, FHA, VA, and USDA products. Coming Soon — pending licensing and approvals.'],
'/financing/inquiry':['BCFC service inquiry | Ground Lens','Prepare a basic service inquiry for Darius@thegroundlens.com. No financial documents or loan applications.'],
'/login':['Workspace access | Ground Lens','Access the Ground Lens private property research workspace.']
};
try{
const {render}=await server.ssrLoadModule('/src/prerender.jsx');
const template=await readFile('dist/index.html','utf8');
for(const [path,[title,description]] of Object.entries(pages)){
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
let html=template.replace(/<title>[\s\S]*?<\/title>/,'<title>'+title+'</title>').replace(/content="Ground Lens brings[^"]*"/,'content="'+escape(description)+'"');
html=html.replace('</head>','<link rel="canonical" href="https://thegroundlens.com'+path+'"/><meta property="og:title" content="'+escape(title)+'"/><meta property="og:description" content="'+escape(description)+'"/><meta property="og:url" content="https://thegroundlens.com'+path+'"/></head>');
html=html.replace('<div id="root"></div>','<div id="root" data-prerender="true">'+render(path)+'</div>');
const folder=path==='/'?'dist':'dist'+path;
await mkdir(folder,{recursive:true});await writeFile(folder+'/index.html',html);
console.log('Prerendered '+path);
}
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(pages).filter(p=>p!='/login'&&p!='/financing/inquiry').map(p=>'<url><loc>https://thegroundlens.com'+p+'</loc></url>').join('')+'</urlset>');
}finally{await server.close();}
