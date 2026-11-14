import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const paths=['/financing','/financing/origination','/financing/services','/financing/residential','/financing/inquiry'];
const headings=new Set();
for(const path of paths){
const html=await readFile('dist'+path+'/index.html','utf8');
assert.equal((html.match(/<h1[ >]/g)||[]).length,1,path+' must have one primary heading');
assert.equal((html.match(/<main[ >]/g)||[]).length,1,path+' must have one main landmark');
assert.ok(html.includes('aria-label="BCFC navigation"'),path+' needs BCFC navigation');
for(const target of paths) assert.ok(html.includes('href="'+target+'"'),path+' must link to '+target);
assert.ok(html.includes('aria-current="page"'),path+' needs an active page indicator');
assert.ok(html.includes('https://thegroundlens.com'+path),path+' needs a canonical URL');
headings.add(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]);
}
assert.equal(headings.size,5,'BCFC pages need distinct primary headings');
const overview=await readFile('dist/financing/index.html','utf8');
assert.ok(!overview.includes('class="bcfc-service"'),'Overview must not duplicate the service detail cards');
console.log('Verified five distinct prerendered BCFC pages, navigation, canonical URLs, and landmarks.');
