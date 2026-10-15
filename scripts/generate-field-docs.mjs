import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'content/field-catalog.json'), 'utf8'));
const targets = [
  {base: path.join(root, 'docs'), locale: 'en'},
  {base: path.join(root, 'i18n/fr/docusaurus-plugin-content-docs/current'), locale: 'fr'},
];

const translations = {
  fr: {
    example: 'Exemple', stored: 'Valeur stockée', args: 'Arguments importants', behavior: 'Comportement', notes: 'Notes', read: 'Lire la valeur',
    common: 'Arguments communs : `label`, `description`, `default`, `required`, `show_if`, `hide_if`.',
    sanitize: 'Le champ passe par le processeur central de sanitization et validation avant les sauvegardes admin normales.',
    storedText: 'Pressundo stocke ce champ sous la forme',
  },
  en: {
    example: 'Example', stored: 'Stored value', args: 'Important arguments', behavior: 'Behavior', notes: 'Notes', read: 'Reading the value',
    common: 'Common field arguments: `label`, `description`, `default`, `required`, `show_if`, `hide_if`.',
    sanitize: 'The field is sanitized and validated through the central field-value processor before normal admin saves.',
    storedText: 'Pressundo stores this field as',
  }
};

function titleFor(type) {
  return type.split('_').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
}

function render(field, locale) {
  const t = translations[locale];
  const title = titleFor(field.type);
  const description = locale === 'fr' && field.description_fr ? field.description_fr : field.description;
  const helper = `${field.helper}()`;
  const args = field.args || t.common;
  const note = field.notes || t.sanitize;
  const behavior = locale === 'fr'
    ? '- Le même schéma est rendu dans Air, Slate et Compact.\n- La sanitization s’exécute avant validation/stockage.\n- Les champs cachés par condition conservent leur valeur stockée sauf modification explicite.\n- L’échappement final dépend toujours du contexte d’affichage front-end.'
    : '- The same schema renders in Air, Slate and Compact.\n- Sanitization runs before validation/storage.\n- Hidden conditional fields keep their stored value unless explicitly changed.\n- Final output escaping remains contextual on the front end.';
  const yaml = v => `'${String(v).replaceAll("'", "''")}'`;
  return `---\ntitle: ${yaml(title)}\ndescription: ${yaml(description)}\n---\n\n# ${title}\n\n${description}\n\n<div className="pressundo-kv">\n<div><span>Helper</span><b>${helper}</b></div>\n<div><span>Type</span><b>${field.type}</b></div>\n<div><span>${t.stored}</span><b>${field.stored}</b></div>\n</div>\n\n## ${t.example}\n\n\`\`\`php\n${field.code};\n\`\`\`\n\n## ${t.stored}\n\n${t.storedText} **${field.stored}**. Composite fields keep structured data instead of forcing opaque CSS strings.\n\n${field.storage_example ? `### ${locale === 'fr' ? 'Exemple de stockage' : 'Storage example'}\n\n\`\`\`php\n${field.storage_example}\n\`\`\`\n\n` : ''}## ${t.args}\n\n${args}\n\n## ${t.behavior}\n\n${behavior}\n\n## ${t.notes}\n\n${note}\n\n## ${t.read}\n\n\`\`\`php\n$options = pu_options('theme_settings');\n$value = $options->get('your_field_id', null);\n\`\`\`\n`;
}

for (const target of targets) {
  for (const field of catalog) {
    const dir = path.join(target.base, 'fields', field.category);
    fs.mkdirSync(dir, {recursive: true});
    const file = path.join(dir, `${field.type.replaceAll('_', '-')}.md`);
    fs.writeFileSync(file, render(field, target.locale));
  }
}

console.log(`Generated ${catalog.length} field pages for ${targets.length} locales.`);
