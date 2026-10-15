---
title: 'Conditional logic'
description: 'Show and hide fields declaratively.'
---

# Conditional logic

Use `show_if` or `hide_if` in field arguments. Conditions are evaluated server-side through the public evaluator and indexed client-side so changing one control only re-evaluates its dependents.

```php
pu_text('tracking_id', [
    'label'   => 'Tracking ID',
    'show_if' => ['tracking_enabled' => true],
]);
```

Supported operators include equality/inequality, `in`, `not_in`, numeric comparisons, `empty`, `not_empty`, `truthy`, `falsy`, `contains` and `not_contains`. See [Conditional logic patterns](/docs/advanced/conditional-logic-patterns).
