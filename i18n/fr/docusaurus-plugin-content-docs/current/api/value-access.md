---
title: 'API d’accès aux valeurs'
---

# API d’accès aux valeurs

Helpers principaux :

```php
pu_get($key, $default = null, $args = []);
pu_set($key, $value, $args = []);
pu_exists($key, $args = []);
pu_delete($key, $args = []);

$options = pu_options('theme_settings', $config = []);
$meta = pu_meta($postId, '_page_settings', $config = []);
```

Utilisez les namespaces pour les tableaux d’options/metas standards. Utilisez les helpers bas niveau lorsqu’une stratégie de migration progressive est nécessaire.
