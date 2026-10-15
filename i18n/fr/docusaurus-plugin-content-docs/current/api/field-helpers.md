---
title: 'API des helpers de champs'
---

# API des helpers de champs

Chaque helper public de champ retourne un simple tableau de schéma.

```php
pu_text('title', [...]);
pu_select('layout', $options, [...]);
pu_typography('heading', [...]);
pu_repeater('items', $fields, [...]);
```

Utilisez `pu_field($type, $id, $args)` lorsqu’un type enregistré ne possède pas de helper dédié ou pour intégrer un type personnalisé.
