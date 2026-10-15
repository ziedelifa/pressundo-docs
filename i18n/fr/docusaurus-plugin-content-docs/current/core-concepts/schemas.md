---
title: 'Schémas'
description: 'Pressundo configuration is plain PHP data.'
---

# Schémas

Les schémas Pressundo sont de simples tableaux PHP. Field helpers return field arrays; `pu_section()` groups fields; options pages and metaboxes consume sections. This keeps configuration portable and avoids proprietary builder objects.

```php
$field = pu_text('headline', ['label' => 'Headline']);
$section = pu_section('content', [$field], ['title' => 'Content']);
```

Le schéma décrit l’interface et la validation. Les valeurs stockées restent indépendantes de la skin UI.
