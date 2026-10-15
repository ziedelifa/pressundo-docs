---
title: 'Validation & sanitization'
description: 'Understand the two-stage value pipeline.'
---

# Validation & sanitization

Pressundo sépare **sanitization** et **validation**.

- La sanitization normalise la valeur vers sa forme de stockage canonique.
- La validation vérifie les champs requis, options autorisées, plages, formats, erreurs imbriquées et limites de lignes.

```php
$field = pu_email('contact_email', ['required' => true]);
$value = pu_sanitize_field($field, ' hello@example.com ');
$result = pu_validate_field($field, $value);

if (! $result->isValid()) {
    $errors = $result->errors();
}
```

Ne confondez pas sanitization du stockage et échappement HTML final. Escape when outputting according to context (`esc_html()`, `esc_attr()`, `esc_url()`, etc.).
