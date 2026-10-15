---
title: 'Dynamic options'
---
# Dynamic options

Options may be static arrays or callables. Dynamic callbacks are normalized into label/value choices and cached once per request unless explicitly configured otherwise.

```php
pu_select('status', function () {
    return ['draft' => 'Draft', 'published' => 'Published'];
}, ['searchable' => true]);
```

Hooks: `pressundo_field_options` and `pressundo_field_options_{$type}` can filter resolved options.
