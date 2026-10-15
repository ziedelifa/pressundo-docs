---
title: 'Reading metabox values'
---
# Reading metabox values

```php
$settings = pu_meta(get_the_ID(), '_page_settings');
$enabled = $settings->get('hero_enabled', false);
$title = $settings->get('hero_title', '');
```

Escape values for their final output context even though the stored form was sanitized.
