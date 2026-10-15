---
title: 'Value access API'
---
# Value access API

Core value helpers:

```php
pu_get($key, $default = null, $args = []);
pu_set($key, $value, $args = []);
pu_exists($key, $args = []);
pu_delete($key, $args = []);

$options = pu_options('theme_settings', $config = []);
$meta = pu_meta($postId, '_page_settings', $config = []);
```

Use namespace objects for normal option/meta arrays. Use low-level helpers when progressive migration strategy matters.
