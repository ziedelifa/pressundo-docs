---
title: 'Limites d’exécution legacy'
---

# Limites d’exécution legacy

`VP_Security::whitelist_function()` reste disponible pour compatibilité API, mais le PHP personnalisé arbitraire n’est pas exécuté par défaut.

Deux escape hatches explicites existent pour les migrations exceptionnelles :

```php
// Opt-ins à haut risque. Laisser OFF sauf si le code legacy est totalement maîtrisé.
define('PRESSUNDO_VAFPRESS_ALLOW_WHITELISTED_CALLBACKS', true);
define('PRESSUNDO_VAFPRESS_ALLOW_UNSAFE_TEMPLATE_INCLUDE', true);
```

Ne les activez pas comme étape générale d’installation.
