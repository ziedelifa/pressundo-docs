---
title: 'Reading & writing values'
---
# Reading & writing values

```php
$options = pu_options('theme_options');
$value = $options->get('brand_color', '#000000');
```

For progressive migration across stores use `pu_get()` / `pu_set()` with migration arguments. Prefer the namespace API for normal page/metabox usage.
