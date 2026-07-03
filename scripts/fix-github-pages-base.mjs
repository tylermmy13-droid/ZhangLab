import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = '/ZhangLab';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const exts = new Set(['.html', '.css', '.js', '.mjs']);
const roots = [
  'assets', '_astro', 'paper-sites', 'about', 'collections',
  'contact', 'faq', 'news', 'our-team', 'publications'
];
const rootPattern = roots.join('|');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : path;
  }));
  return files.flat();
}

function prefixRootPaths(source) {
  let text = source;
  text = text.replace(/href=(["'])\/\1/g, `href=$1${base}/$1`);
  text = text.replace(new RegExp(`(["'=\\(])\\/(?!ZhangLab\\/)(?:${rootPattern})(?=[\\/"'\\)])`, 'g'), (match, lead) => `${lead}${base}${match.slice(lead.length)}`);
  text = text.replace(new RegExp(`(&quot;)\\/(?!ZhangLab\\/)(?:${rootPattern})(?=[\\/])`, 'g'), (match, lead) => `${lead}${base}${match.slice(lead.length)}`);
  text = text.replace(new RegExp(`(&#34;)\\/(?!ZhangLab\\/)(?:${rootPattern})(?=[\\/])`, 'g'), (match, lead) => `${lead}${base}${match.slice(lead.length)}`);
  text = text.replace(/url\((['"]?)\/(?!ZhangLab\/)(assets|_astro|paper-sites)\//g, `url($1${base}/$2/`);
  return text;
}

const files = await walk(dist);
await Promise.all(files.filter((file) => exts.has(extname(file))).map(async (file) => {
  const source = await readFile(file, 'utf8');
  const next = prefixRootPaths(source);
  if (next !== source) await writeFile(file, next);
}));

console.log(`Applied GitHub Pages base path: ${base}`);
