---
title: 'Dynamic options'
description: 'Resolve select choices from callbacks without old Vafpress AJAX.'
---

# Dynamic options

Choice fields accept a static array or a callable. A dynamic callback is normalized and cached once per request by default.

```php
pu_select('featured_page', function () {
    return [
        'home'  => 'Home',
        'about' => 'About',
    ];
}, ['label' => 'Featured page', 'searchable' => true]);
```

For WordPress entities, prefer the dedicated selectors (`pu_post_select`, `pu_term_select`, `pu_user_select`, etc.) instead of building repeated custom queries.
