---
title: 'Your first options page'
description: 'Understand the options-page schema.'
---

# Your first options page

A Pressundo options page is a plain PHP array. The important keys are `id`, `title`, `storage_key`, `ui_theme`, and `sections`.

```php
pu_options_page([
    'id'          => 'company-options',
    'title'       => 'Company Options',
    'storage_key' => 'company_options',
    'ui_theme'    => 'slate',
    'sections'    => [
        pu_section('branding', [
            pu_media('logo', ['label' => 'Logo']),
            pu_text('company_name', ['label' => 'Company name', 'required' => true]),
        ], ['title' => 'Branding']),
    ],
]);
```

The same field definitions can be reused in Air, Slate or Compact skins without changing the stored data.
