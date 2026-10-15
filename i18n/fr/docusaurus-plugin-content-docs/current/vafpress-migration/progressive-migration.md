---
title: 'Migration progressive'
---

# Migration progressive

Pressundo fournit trois stratégies non destructives :

| Stratégie | Comportement |
|---|---|
| `preserve` | Le stockage legacy existant reste la source de vérité. Les nouvelles installations utilisent le stockage moderne. |
| `lazy` | Lit le legacy seulement si la valeur moderne manque, copie la valeur accédée une fois, puis utilise le moderne. |
| `copy` | Utilise le stockage moderne tout en synchronisant le stockage legacy existant pour rollback/compatibilité. |

La Free 1.0 ne propose volontairement aucune stratégie destructive `move`.

Les mappings peuvent utiliser `migrate_from` et, si nécessaire, `from_legacy`, `to_legacy` et `sanitize`.
