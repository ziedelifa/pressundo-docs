---
title: 'Types de champs personnalisés'
---

# Types de champs personnalisés

Implémentez `Pressundo\Framework\Contracts\FieldTypeInterface` puis enregistrez votre instance :

```php
pu_register_field_type($myFieldType);
```

Vérifiez la disponibilité avec `pu_has_field_type()` et listez les types avec `pu_field_types()`.

Un type personnalisé doit définir une sanitization/validation prévisible. Le fallback des types inconnus ne doit pas devenir votre API permanente.
