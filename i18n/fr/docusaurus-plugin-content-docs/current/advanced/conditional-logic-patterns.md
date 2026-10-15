---
title: 'Patterns de logique conditionnelle'
---

# Patterns de logique conditionnelle

Règle simple :

```php
pu_text('tracking_id', ['show_if' => ['tracking_enabled' => true]]);
```

Pour des conditions plus complexes, utilisez plusieurs règles avec `condition_relation` (`and` / `or`). Les opérateurs disponibles incluent `=`, `==`, `!=`, `<>`, `in`, `not_in`, `>`, `>=`, `<`, `<=`, `empty`, `not_empty`, `truthy`, `falsy`, `contains` et `not_contains`.

Le JavaScript de Pressundo indexe les dépendances : lorsqu’une valeur change, seuls les champs dépendants sont réévalués au lieu de rescanner tout le formulaire.
