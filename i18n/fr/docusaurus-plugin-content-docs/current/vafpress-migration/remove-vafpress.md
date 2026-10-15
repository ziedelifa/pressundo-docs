---
title: 'Retirer Vafpress proprement'
---

# Retirer Vafpress proprement

## Avant

Un thème legacy peut contenir un `require` vers `vafpress-framework/bootstrap.php` et des déclarations `VP_Option` / `VP_Metabox`.

## Migration

1. Sauvegardez et testez en préproduction.
2. Installez/activez Pressundo.
3. Supprimez le dossier runtime Vafpress du thème.
4. Supprimez le `require` explicite du bootstrap Vafpress.
5. **Ne renommez pas les clés de stockage.**
6. Conservez les déclarations legacy courantes pendant la validation du site.

Pressundo expose les classes/fonctions de compatibilité nécessaires pour que les champs standards passent par le renderer moderne.

## Limite de sécurité

Les callbacks PHP arbitraires whitelistés et les includes PHP legacy non sûrs sont désactivés par défaut. Les réactiver est un choix de compatibilité à risque, pas une étape normale de migration.
