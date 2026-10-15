---
title: 'Conditional logic patterns'
---
# Conditional logic patterns

Simple rule:

```php
pu_text('tracking_id', ['show_if' => ['tracking_enabled' => true]]);
```

For more complex conditions use condition arrays and `condition_relation` (`and` / `or`). Operators supported by the evaluator include `=`, `==`, `!=`, `<>`, `in`, `not_in`, `>`, `>=`, `<`, `<=`, `empty`, `not_empty`, `truthy`, `falsy`, `contains`, and `not_contains`.

Pressundo indexes condition dependencies in JavaScript, so a change only re-evaluates fields that depend on the changed input instead of rescanning the full form.
