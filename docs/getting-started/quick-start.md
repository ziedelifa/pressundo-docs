---
title: '5-minute quick start'
description: 'Create your first Pressundo options page.'
---

# 5-minute quick start

Create a file such as `inc/theme-options.php` and declare one options page:

```php
pu_options_page([
    'id'          => 'theme-settings',
    'title'       => 'Theme Settings',
    'storage_key' => 'theme_settings',
    'ui_theme'    => 'air',
    'sections'    => [
        pu_section('general', [
            pu_text('site_title', ['label' => 'Site title']),
            pu_color('brand_color', ['label' => 'Brand color', 'default' => '#6D28D9']),
            pu_toggle('sticky_header', ['label' => 'Sticky header']),
        ], ['title' => 'General']),
    ],
]);
```

Read the values anywhere after WordPress has loaded:

```php
$options = pu_options('theme_settings');
$title   = $options->get('site_title', '');
$color   = $options->get('brand_color', '#6D28D9');
```

Values are sanitized by their field type when saved. Output escaping still belongs at the final output boundary:

```php
echo esc_html($title);
```

Next: [create a metabox](./first-metabox.md) or browse [all 53 field types](/fields).
