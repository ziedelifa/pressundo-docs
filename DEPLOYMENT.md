# Deployment

The documentation site is fully static after `npm run build`.

## Apache / Nginx

```bash
npm install --no-audit --no-fund
npm run docs:check
npm run build
```

Publish the contents of `build/` as the document root for `docs.pressundo.com`.

## Cloudflare Pages

- Build command: `npm install --no-audit --no-fund && npm run docs:check && npm run build`
- Build output directory: `build`
- Node.js: 22
- Custom domain: `docs.pressundo.com`

## GitHub Pages / other static hosts

The included workflow builds the site on pushes to `main`. Adapt the final deploy step to your provider. `static/CNAME` already contains `docs.pressundo.com`.

## Algolia DocSearch

The site uses local search when Algolia variables are absent. After the public domain is reachable and an Algolia DocSearch index exists, configure:

```text
ALGOLIA_APP_ID
ALGOLIA_API_KEY
ALGOLIA_INDEX_NAME
```

The Docusaurus config then enables contextual search automatically.
