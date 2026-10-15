---
title: 'Metaboxes'
description: 'Créer des metaboxes modernes dans l’édition WordPress.'
---

# Metaboxes

`pu_metabox()` enregistre une metabox moderne sur l’écran d’édition d’un contenu. Elle utilise les mêmes champs, skins, validations et garde-fous sécurité que les pages d’options.

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
