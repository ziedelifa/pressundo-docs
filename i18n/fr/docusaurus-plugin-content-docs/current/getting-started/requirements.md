---
title: 'Prérequis'
description: 'Prerequisites before using Pressundo.'
---

# Prérequis

Pressundo cible des installations WordPress modernes. La version stable 1.0 a été durcie et testée avec PHP 8.2 à 8.4. Installez le plugin normalement puis chargez la configuration de votre thème/plugin après Pressundo.

## Avant de commencer

- Sauvegardez la production avant de remplacer un framework legacy.
- Ne chargez pas l’ancien runtime Vafpress et le runtime de compatibilité Pressundo en même temps.
- Conservez les mêmes clés options/meta pour préserver les données existantes.
- Faites le premier retrait de Vafpress en préproduction.

## Version API

```php
if (function_exists('pu_api_version') && pu_api_version() === '1') {
    // L’API publique v1 est disponible.
}
```
