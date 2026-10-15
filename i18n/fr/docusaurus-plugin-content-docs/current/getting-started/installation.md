---
title: 'Installation'
description: 'Install Pressundo Framework in WordPress.'
---

# Installation

## Installer le plugin

1. WordPress → **Extensions → Ajouter → Téléverser une extension**.
2. Envoyez `pressundo-framework-1.0.0.zip`.
3. Activez **Pressundo Framework**.
4. Gardez la configuration dans votre thème ou plugin compagnon.

## Code du thème

Déclarez votre configuration après le chargement des plugins.

```php
add_action('after_setup_theme', function () {
    if (! function_exists('pu_options_page')) {
        return;
    }
    require get_theme_file_path('/inc/theme-options.php');
});
```

Pour un projet Vafpress existant, suivez d’abord le [guide de migration](/fr/vafpress-migration/remove-vafpress).
