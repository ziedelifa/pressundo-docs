---
title: 'Custom field types'
---
# Custom field types

Implement `Pressundo\Framework\Contracts\FieldTypeInterface` and register the instance:

```php
pu_register_field_type($myFieldType);
```

Check availability with `pu_has_field_type()` and inspect registered names with `pu_field_types()`.

A custom type must define predictable sanitization/validation semantics; do not use unknown-field fallback as your permanent API.
