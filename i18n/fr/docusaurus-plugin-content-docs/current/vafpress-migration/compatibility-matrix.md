---
title: 'Matrice de compatibilité Vafpress'
---

# Matrice de compatibilité Vafpress

Pressundo 1.0 mappe automatiquement les **20/20 types de champs standards Vafpress** :

| Vafpress | Pressundo | Statut |
|---|---|---|
| `textbox` | `text` | Automatique |
| `textarea` | `textarea` | Automatique |
| `toggle` | `toggle` | Automatique |
| `select` | `select` | Automatique |
| `multiselect` | `multi_select` | Automatique |
| `radiobutton` | `radio` | Automatique |
| `radioimage` | `image_radio` | Automatique |
| `checkbox` | `checkbox_group` | Automatique |
| `checkimage` | `image_checkbox_group` | Automatique |
| `slider` | `range` | Automatique |
| `upload` | `media` | Automatique |
| `date` | `date` | Automatique |
| `color` | `color` | Automatique |
| `codeeditor` | `code` | Automatique |
| `html` | `html` | Automatique |
| `notebox` | `notice` | Automatique |
| `fontawesome` | `icon` | Automatique |
| `wpeditor` | `editor` | Automatique |
| `sorter` | `sortable_select` | Automatique |
| `group` | `group` | Automatique |

Cette matrice couvre les types standards. Les extensions directes d’internals Vafpress non documentés ne font pas partie de la promesse de compatibilité automatique.
