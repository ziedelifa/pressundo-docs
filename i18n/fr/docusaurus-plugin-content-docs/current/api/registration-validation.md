---
title: 'API d’enregistrement & validation'
---

# API d’enregistrement & validation

```php
pu_register_field_type($fieldType);
pu_has_field_type('my_type');
pu_field_types();

$sanitized = pu_sanitize_field($fieldSchema, $rawValue);
$result = pu_validate_field($fieldSchema, $sanitized);
```

`pu_validate_field()` retourne `Pressundo\Framework\Api\ValidationResult`.
