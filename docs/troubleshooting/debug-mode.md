---
title: 'Debug mode'
---
# Debug mode

Advanced Vafpress diagnostics are hidden from normal production UI. Enable them explicitly in `wp-config.php` when auditing a migration:

```php
define('PRESSUNDO_FRAMEWORK_DEBUG', true);
```

Disable debug mode after the migration investigation. It is not required for normal compatibility runtime operation.
