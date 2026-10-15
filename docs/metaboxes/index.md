---
title: 'Metaboxes'
description: 'Create modern post-edit metaboxes.'
---
# Metaboxes

`pu_metabox()` registers a modern post metabox using the same fields, skins, validation and security pipeline as options pages.

```php
pu_metabox([
  'id' => 'page-settings',
  'title' => 'Page Settings',
  'post_types' => ['page'],
  'storage_key' => '_page_settings',
  'ui_theme' => 'slate',
  'sections' => [...],
]);
```
