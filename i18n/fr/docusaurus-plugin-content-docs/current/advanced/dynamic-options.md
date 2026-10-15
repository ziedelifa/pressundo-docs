---
title: 'Options dynamiques'
---

# Options dynamiques

Les options peuvent être un tableau statique ou un callable. Les callbacks dynamiques sont normalisés en couples label/valeur et mis en cache une fois par requête par défaut.

```php
pu_select('status', function () {
    return ['draft' => 'Draft', 'published' => 'Published'];
}, ['searchable' => true]);
```

Les hooks `pressundo_field_options` et `pressundo_field_options_{$type}` permettent de filtrer les options résolues.
