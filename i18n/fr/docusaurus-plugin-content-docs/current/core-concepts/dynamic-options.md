---
title: 'Options dynamiques'
description: 'Resolve select choices from callbacks without old Vafpress AJAX.'
---

# Options dynamiques

Les champs de choix acceptent un tableau statique ou un callable. A dynamic callback is normalized and cached once per request by default.

```php
pu_select('featured_page', function () {
    return [
        'home'  => 'Home',
        'about' => 'About',
    ];
}, ['label' => 'Featured page', 'searchable' => true]);
```

Pour les entités WordPress, préférez the dedicated selectors (`pu_post_select`, `pu_term_select`, `pu_user_select`, etc.) instead of building repeated custom queries.
