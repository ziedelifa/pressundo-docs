---
title: 'Team repeater recipe'
---
# Team repeater recipe

```php
pu_repeater('team', [
  pu_text('name', ['label' => 'Name', 'required' => true]),
  pu_text('role', ['label' => 'Role']),
  pu_media('photo', ['label' => 'Photo']),
  pu_url('profile_url', ['label' => 'Profile URL']),
], [
  'label' => 'Team members',
  'max_rows' => 24,
]);
```

Rows can be reordered by drag handle; the menu includes duplicate/delete/move actions, and validation errors propagate from child fields.
