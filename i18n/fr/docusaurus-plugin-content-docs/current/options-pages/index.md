---
title: 'Pages d’options'
description: 'Créer des écrans de réglages d’admin modernes.'
---
# Pages d’options

Utilisez `pu_options_page()` pour enregistrer un écran complet de réglages WordPress. La page utilise le renderer partagé, la sauvegarde centralisée, la protection de révision et le chargement conditionnel des assets.

```php
pu_options_page([
    'id' => 'theme-options',
    'title' => 'Theme Options',
    'storage_key' => 'theme_options',
    'ui_theme' => 'air',
    'sections' => [...],
]);
```

Choisissez [Air, Slate ou Compact](./ui-skins.md) sans changer le schéma ni le stockage.
