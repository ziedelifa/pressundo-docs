---
title: 'Votre première page d’options'
description: 'Understand the options-page schema.'
---

# Votre première page d’options

Une page d’options Pressundo est un simple tableau PHP. Les clés importantes sont `id`, `title`, `storage_key`, `ui_theme`, and `sections`.

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

Les mêmes définitions de champs peuvent être réutilisées in Air, Slate or Compact skins without changing the stored data.
