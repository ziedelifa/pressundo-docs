---
title: 'Your first metabox'
description: 'Create a modern Pressundo metabox.'
---

# Your first metabox

```php
pu_metabox([
    'id'          => 'page-settings',
    'title'       => 'Page Settings',
    'post_types'  => ['page'],
    'storage_key' => '_page_settings',
    'ui_theme'    => 'slate',
    'sections'    => [
        pu_section('hero', [
            pu_toggle('hero_enabled', ['label' => 'Enable hero']),
            pu_text('hero_title', [
                'label'   => 'Hero title',
                'show_if' => ['hero_enabled' => true],
            ]),
            pu_media('hero_image', ['label' => 'Hero image']),
        ]),
    ],
]);
```

Read values:

```php
$settings = pu_meta(get_the_ID(), '_page_settings');
$title = $settings->get('hero_title', '');
```

Pressundo handles nonce verification, capability checks, revisions/autosaves, validation, sanitization and concurrent-save protection.
