# Pressundo Documentation Website

Official source for `https://docs.pressundo.com`.

## Local development

```bash
npm install
npm run start
```

French preview:

```bash
npm run start:fr
```

Production build:

```bash
npm run docs:check
npm run build
```

The generated static site is written to `build/`.

## Source of truth

The stable framework documentation and copy/paste examples are snapshotted under:

```text
upstream/pressundo-framework/docs/
upstream/pressundo-framework/examples/
```

To refresh that snapshot from a framework checkout:

```bash
PRESSUNDO_FRAMEWORK_DIR=/path/to/pressundo-framework npm run docs:sync
```

Detailed online guides and field reference pages live in this repository, while release-contract documents (API freeze, hooks, security, release checklist) are mirrored from the framework snapshot.

## Search

Local search works by default. For the public production site, set all three variables below to switch automatically to Algolia DocSearch:

```bash
ALGOLIA_APP_ID=...
ALGOLIA_API_KEY=...
ALGOLIA_INDEX_NAME=...
```

## Documentation versions

The current documentation line is labeled **1.x**. Do not create a snapshot for every patch release. Create a historical Docusaurus version when documentation behavior meaningfully diverges between supported API lines.
