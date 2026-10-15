import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = process.env.PRESSUNDO_FRAMEWORK_DIR;
if (!source) {
  console.error('Set PRESSUNDO_FRAMEWORK_DIR=/absolute/path/to/pressundo-framework');
  process.exit(1);
}

for (const dir of ['docs', 'examples']) {
  const from = path.join(source, dir);
  const to = path.join(root, 'upstream/pressundo-framework', dir);
  if (!fs.existsSync(from)) {
    console.error(`Missing source directory: ${from}`);
    process.exit(1);
  }
  fs.rmSync(to, {recursive: true, force: true});
  fs.cpSync(from, to, {recursive: true});
}
console.log('Synchronized framework docs/examples into upstream snapshot.');
console.log('Run npm run docs:generate after changing the field catalog.');
