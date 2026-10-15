---
title: 'Configuration d’une page d’options'
---

# Configuration d’une page d’options

| Clé | Rôle |
|---|---|
| `id` | Identifiant stable de la page/du schéma. |
| `title` | Titre de la page d’administration. |
| `storage_key` | Nom de l’option WordPress contenant le tableau de valeurs. |
| `ui_theme` | `air`, `slate` ou `compact`. |
| `sections` | Tableau de schémas `pu_section()`. |

Gardez `storage_key` stable une fois le site en production. Le modifier change l’emplacement où les valeurs sont lues et écrites.
