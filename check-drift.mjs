// check-drift.mjs — the live page must carry the gated kernel VERBATIM and delegate to it.
// Rebuilds the expected inline block from ground.mjs and refuses any drift; live logic = proven logic.
import { readFileSync } from 'node:fs';
const html = readFileSync('index.html', 'utf8');
const kernel = readFileSync('ground.mjs', 'utf8').replace(/^export /gm, '').replace(/<\/script/g, '<\/script');
if (!html.includes(kernel)) { console.error('DRIFT: the page no longer carries ground.mjs verbatim — re-run the konomify surgery.'); process.exit(1); }
const wrappers = JSON.parse(readFileSync('wrappers.json', 'utf8'));
for (const [n, w] of Object.entries(wrappers)) if (!html.includes(w)) { console.error('DRIFT: wrapper for ' + n + ' missing — the page is not delegating.'); process.exit(1); }
console.log('page carries the gated kernel verbatim + ' + Object.keys(wrappers).length + ' delegating wrappers — no drift');
