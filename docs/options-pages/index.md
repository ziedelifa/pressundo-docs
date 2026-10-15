---
title: 'Options pages'
description: 'Create modern admin settings pages.'
---
# Options pages

Use `pu_options_page()` to register a complete WordPress admin settings screen. The page uses the shared Pressundo renderer, centralized save pipeline, revision guard and conditional asset loader.

```php
pu_options_page([
    'id' => 'theme-options',
    'title' => 'Theme Options',
    'storage_key' => 'theme_options',
    'ui_theme' => 'air',
    'sections' => [...],
]);
```

Choose [Air, Slate or Compact](./ui-skins.md) without changing field schemas or storage.
