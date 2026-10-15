---
title: 'Field helper API'
---
# Field helper API

Every public field helper returns a plain schema array. Examples:

```php
pu_text('title', [...]);
pu_select('layout', $options, [...]);
pu_typography('heading', [...]);
pu_repeater('items', $fields, [...]);
```

Use `pu_field($type, $id, $args)` when a registered type has no dedicated helper or when integrating a custom field type.
