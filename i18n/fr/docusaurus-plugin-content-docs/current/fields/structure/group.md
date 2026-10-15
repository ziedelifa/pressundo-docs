---
title: 'Group'
---

# Group

`pu_group()` imbrique plusieurs champs liés dans une seule valeur structurée.

```php
pu_group('contact', [
    pu_text('name', ['label' => 'Name']),
    pu_email('email', ['label' => 'Email']),
]);
```

La sanitization et la validation des enfants sont récursives.
