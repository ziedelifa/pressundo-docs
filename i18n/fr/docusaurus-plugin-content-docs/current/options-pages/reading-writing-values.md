---
title: 'Lire et écrire les valeurs'
---

# Lire et écrire les valeurs

```php
$options = pu_options('theme_options');
$value = $options->get('brand_color', '#000000');
```

Pour une migration progressive entre plusieurs stockages, utilisez `pu_get()` / `pu_set()` avec les arguments de migration. Pour un usage normal Options/Metabox, préférez l’API namespace.
