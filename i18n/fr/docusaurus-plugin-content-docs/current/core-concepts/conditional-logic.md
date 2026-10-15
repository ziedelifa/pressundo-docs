---
title: 'Logique conditionnelle'
description: 'Show and hide fields declaratively.'
---

# Logique conditionnelle

Utilisez `show_if` ou `hide_if` dans les arguments du champ. Conditions are evaluated server-side through the public evaluator and indexed client-side so changing one control only re-evaluates its dependents.

```php
pu_text('tracking_id', [
    'label'   => 'Tracking ID',
    'show_if' => ['tracking_enabled' => true],
]);
```

Les opérateurs disponibles incluent equality/inequality, `in`, `not_in`, numeric comparisons, `empty`, `not_empty`, `truthy`, `falsy`, `contains` and `not_contains`. See [Conditional logic patterns](/advanced/conditional-logic-patterns).
