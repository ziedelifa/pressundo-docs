---
title: 'Lire les valeurs d’une metabox'
---

# Lire les valeurs d’une metabox

```php
$settings = pu_meta(get_the_ID(), '_page_settings');
$enabled = $settings->get('hero_enabled', false);
$title = $settings->get('hero_title', '');
```

Même si la valeur a été sanitizée lors de la sauvegarde, appliquez toujours l’échappement adapté au contexte final d’affichage.
