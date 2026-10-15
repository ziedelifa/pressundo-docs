---
title: 'Validation & sanitization'
description: 'Understand the two-stage value pipeline.'
---

# Validation & sanitization

Pressundo separates **sanitization** from **validation**.

- Sanitization normalizes a value into the canonical storage shape.
- Validation checks required rules, allowed options, ranges, formats, nested child errors and row limits.

```php
$field = pu_email('contact_email', ['required' => true]);
$value = pu_sanitize_field($field, ' hello@example.com ');
$result = pu_validate_field($field, $value);

if (! $result->isValid()) {
    $errors = $result->errors();
}
```

Never confuse stored sanitization with final HTML escaping. Escape when outputting according to context (`esc_html()`, `esc_attr()`, `esc_url()`, etc.).
