---
title: 'Schemas'
description: 'Pressundo configuration is plain PHP data.'
---

# Schemas

Pressundo schemas are plain arrays. Field helpers return field arrays; `pu_section()` groups fields; options pages and metaboxes consume sections. This keeps configuration portable and avoids proprietary builder objects.

```php
$field = pu_text('headline', ['label' => 'Headline']);
$section = pu_section('content', [$field], ['title' => 'Content']);
```

A schema describes UI and validation. Stored values remain independent of the UI skin.
