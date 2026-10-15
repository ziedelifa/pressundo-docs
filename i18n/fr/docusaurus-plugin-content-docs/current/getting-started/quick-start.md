---
title: 'Quick Start 5 minutes'
description: 'Create your first Pressundo options page.'
---

# Quick Start 5 minutes

Créez un fichier comme `inc/theme-options.php` and declare one options page:

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

Lisez ensuite les valeurs après le chargement de WordPress :

```php
$options = pu_options('theme_settings');
$title   = $options->get('site_title', '');
$color   = $options->get('brand_color', '#6D28D9');
```

Les valeurs sont sanitizées selon leur type lors de la sauvegarde. L’échappement HTML reste nécessaire au moment de l’affichage :

```php
echo esc_html($title);
```

Suite : [create a metabox](./first-metabox.md) or browse [all 53 field types](/fields).
