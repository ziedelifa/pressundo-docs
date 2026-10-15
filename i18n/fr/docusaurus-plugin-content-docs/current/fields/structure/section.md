---
title: 'Section'
---

# Section

`pu_section()` regroupe des champs pour une page d’options ou une metabox. Une section est un objet de schéma : elle ne crée pas un stockage indépendant.

```php
pu_section('branding', [
    pu_media('logo', ['label' => 'Logo']),
    pu_color('brand_color', ['label' => 'Brand color']),
], ['title' => 'Branding']);
```
