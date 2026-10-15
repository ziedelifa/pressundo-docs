---
title: 'Installation'
description: 'Install Pressundo Framework in WordPress.'
---

# Installation

## Install the plugin

1. In WordPress, open **Plugins → Add New → Upload Plugin**.
2. Upload `pressundo-framework-1.0.0.zip`.
3. Activate **Pressundo Framework**.
4. Keep your configuration in your theme or companion plugin.

## Theme code

Use Pressundo only after plugins are loaded. A theme can declare configuration from `functions.php` or a dedicated file included by the theme.

```php
add_action('after_setup_theme', function () {
    if (! function_exists('pu_options_page')) {
        return;
    }

    require get_theme_file_path('/inc/theme-options.php');
});
```

## Existing Vafpress project

Do **not** rewrite everything before installing Pressundo. Follow the [Vafpress migration guide](/docs/vafpress-migration/remove-vafpress).
