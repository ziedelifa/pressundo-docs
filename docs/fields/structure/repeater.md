---
title: 'Repeater'
---
# Repeater

`pu_repeater()` stores a list of structured rows and supports add/remove, duplicate, collapse and drag ordering. Keyboard move actions remain available for accessibility.

```php
pu_repeater('team', [
    pu_text('name', ['label' => 'Name', 'required' => true]),
    pu_text('role', ['label' => 'Role']),
    pu_media('photo', ['label' => 'Photo']),
], [
    'label' => 'Team members',
    'min_rows' => 1,
    'max_rows' => 20,
]);
```

A server-side security hard limit of **250 rows** applies by default, independent of the UI `max_rows` setting.
