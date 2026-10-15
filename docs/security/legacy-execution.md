---
title: 'Legacy execution boundaries'
---
# Legacy execution boundaries

`VP_Security::whitelist_function()` remains available for API compatibility, but arbitrary custom PHP is not executed by default.

Two explicit `wp-config.php` escape hatches exist for exceptional migrations:

```php
// High-risk compatibility opt-ins. Keep OFF unless you fully trust the legacy code.
define('PRESSUNDO_VAFPRESS_ALLOW_WHITELISTED_CALLBACKS', true);
define('PRESSUNDO_VAFPRESS_ALLOW_UNSAFE_TEMPLATE_INCLUDE', true);
```

Do not enable these as a general installation step.
