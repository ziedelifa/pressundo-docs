---
title: 'Pressundo Framework'
description: 'Framework WordPress moderne pour options et metaboxes, compatible Vafpress.'
---

# Pressundo Framework

Pressundo Framework est un **framework moderne d’options et de metaboxes WordPress**, avec une API publique v1 stable et un runtime de compatibilité pour les projets Vafpress existants.

Deux usages principaux :

- **Nouveaux projets :** utilisez l’API `pu_*` dès le départ.
- **Thèmes Vafpress existants :** supprimez l’ancien runtime Vafpress, conservez temporairement le code courant `VP_Option` / `VP_Metabox`, gardez les données existantes et migrez progressivement.

<div className="pressundo-kv">
<div><span>API publique</span><b>v1</b></div>
<div><span>Types de champs</span><b>53</b></div>
<div><span>Champs Vafpress</span><b>20 / 20 automatiques</b></div>
</div>

## Ce que Pressundo fournit

- Pages d’options modernes avec `pu_options_page()`.
- Metaboxes modernes avec `pu_metabox()`.
- Skins d’admin Air, Slate et Compact.
- Champs texte, choix, média, layout, typographie, responsive et sélecteurs WordPress.
- Groupes, repeaters et contrôles triables.
- Logique conditionnelle et options dynamiques.
- Sanitization et validation centralisées.
- Migration progressive du stockage : `preserve`, `lazy`, `copy`.
- Compatibilité Vafpress sûre sans embarquer l’ancien runtime.
- Protection contre les sauvegardes concurrentes.

## Parcours recommandé

Pour un nouveau projet, continuez avec le [Quick Start 5 minutes](./getting-started/quick-start.md).

Pour un thème Vafpress, commencez par [Retirer Vafpress proprement](./vafpress-migration/remove-vafpress.md).
