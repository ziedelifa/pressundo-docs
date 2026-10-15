import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');
const fr = path.join(root, 'i18n/fr/docusaurus-plugin-content-docs/current');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'content/field-catalog.json'), 'utf8'));
const apiFile = fs.readFileSync(path.join(root, 'upstream/pressundo-framework/docs/API-FREEZE.md'), 'utf8');

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

const enDocs = walk(docs).filter(f => f.endsWith('.md'));
const frDocs = walk(fr).filter(f => f.endsWith('.md'));

if (catalog.length !== 53) fail(`expected 53 fields, got ${catalog.length}`);
if (enDocs.length !== frDocs.length) fail(`EN/FR doc count differs: ${enDocs.length}/${frDocs.length}`);

for (const field of catalog) {
  const rel = path.join('fields', field.category, `${field.type.replaceAll('_', '-')}.md`);
  if (!fs.existsSync(path.join(docs, rel))) fail(`missing EN field page ${rel}`);
  if (!fs.existsSync(path.join(fr, rel))) fail(`missing FR field page ${rel}`);
}

if (!apiFile.includes('Public API') && !apiFile.includes('API v1')) {
  fail('upstream API freeze snapshot looks invalid');
}

// Lightweight relative-link check. Docusaurus performs the authoritative link check at build time.
const linkRe = /\[[^\]]+\]\(([^)]+)\)/g;
for (const file of enDocs) {
  const text = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = linkRe.exec(text))) {
    const href = m[1].split('#')[0];
    if (!href || /^(https?:|mailto:|\/)/.test(href)) continue;
    if (!href.endsWith('.md')) continue;
    const resolved = path.resolve(path.dirname(file), href);
    if (!fs.existsSync(resolved)) {
      fail(`broken relative link ${href} in ${path.relative(root, file)}`);
    }
  }
}

// Absolute documentation route check.
// Docusaurus classic serves docs below /docs by default, and localized
// French docs below /fr/docs. Keep this local check aligned with that routing.
function routeFor(file, base, localePrefix = '') {
  let rel = path.relative(base, file).replaceAll(path.sep, '/').replace(/\.md$/, '');
  rel = rel.replace(/\/index$/, '');
  rel = rel.replace(/^\/+|\/+$/g, '');

  const docsBase = localePrefix ? `/${localePrefix}/docs` : '/docs';
  return rel ? `${docsBase}/${rel}` : docsBase;
}

const routes = new Set(['/', '/fr']);
for (const file of enDocs) routes.add(routeFor(file, docs));
for (const file of frDocs) routes.add(routeFor(file, fr, 'fr'));

const absLinkRe = /\[[^\]]+\]\((\/[^)#?]+)[^)]*\)/g;
for (const files of [enDocs, frDocs]) {
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = absLinkRe.exec(text))) {
      const href = m[1].replace(/\/$/, '') || '/';
      if (!routes.has(href)) {
        fail(`broken absolute docs route ${href} in ${path.relative(root, file)}`);
      }
    }
  }
}

if (!process.exitCode) {
  console.log(`PASS: ${enDocs.length} EN docs, ${frDocs.length} FR docs, ${catalog.length} fields, ${routes.size} localized routes.`);
}
