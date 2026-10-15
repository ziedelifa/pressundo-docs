---
title: 'Mode Debug'
---

# Mode Debug

Les diagnostics Vafpress avancés sont masqués dans l’interface de production normale. Pour auditer une migration, activez-les explicitement dans `wp-config.php` :

```php
define('PRESSUNDO_FRAMEWORK_DEBUG', true);
```

Désactivez le mode Debug après l’investigation. Il n’est pas nécessaire au fonctionnement normal du runtime de compatibilité.
