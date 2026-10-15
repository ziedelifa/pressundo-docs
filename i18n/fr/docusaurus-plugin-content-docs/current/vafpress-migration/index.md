---
title: 'Migration Vafpress'
description: 'Retirer Vafpress sans perdre le code de thème fonctionnel ni les données stockées.'
---

# Migration Vafpress

Pressundo a été conçu pour éviter de réécrire tous les sites clients avant de retirer Vafpress.

Séquence recommandée :

1. Installer Pressundo Framework.
2. Supprimer l’ancien runtime `vafpress-framework/` et son `require` de bootstrap.
3. Conserver temporairement les appels courants `VP_Option`, `VP_Metabox`, `vp_option()` et `vp_metabox()`.
4. Vérifier que les options/metas existantes sont toujours lues avec les mêmes clés.
5. Ajouter de nouveaux champs avec l’API Pressundo moderne si nécessaire.
6. Migrer progressivement les déclarations legacy.

Le runtime de compatibilité ne restaure volontairement pas les internals dangereux ou obsolètes comme l’exécution AJAX PHP arbitraire.
