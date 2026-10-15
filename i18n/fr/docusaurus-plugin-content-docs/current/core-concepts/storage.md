---
title: 'Stockage'
description: 'How Pressundo reads and writes values.'
---

# Stockage

Utilisez les namespaces pour les tableaux d’options et de post meta :

```php
$options = pu_options('theme_settings');
$options->get('brand_color', '#000000');

$meta = pu_meta($post_id, '_page_settings');
$meta->get('hero_title', '');
```

For progressive migrations, low-level `pu_get()`, `pu_set()`, `pu_exists()` and `pu_delete()` can resolve legacy and modern stores using `preserve`, `lazy` or `copy`.

Pressundo n’impose aucun déplacement destructif des données legacy.
