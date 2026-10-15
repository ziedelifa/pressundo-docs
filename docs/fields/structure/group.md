---
title: 'Group'
---
# Group

`pu_group()` nests related child fields into one structured value.

```php
pu_group('contact', [
    pu_text('name', ['label' => 'Name']),
    pu_email('email', ['label' => 'Email']),
]);
```

Child sanitization/validation is recursive.
