---
title: 'Arguments communs des champs'
---

# Arguments communs des champs

La plupart des champs acceptent un tableau d’arguments. Les arguments spécifiques à chaque type sont documentés sur sa page.

| Argument | Rôle |
|---|---|
| `label` | Libellé lisible dans l’admin. |
| `description` | Texte d’aide ou de contexte. |
| `default` | Valeur par défaut si rien n’est stocké. |
| `required` | Exige une valeur valide non vide. |
| `show_if` | Affiche le champ lorsque les conditions correspondent. |
| `hide_if` | Masque le champ lorsque les conditions correspondent. |
| `condition_relation` | Combine plusieurs règles avec `and` ou `or`. |
| `migrate_from` | Déclare une source legacy pour la migration progressive. |

Les champs de choix acceptent aussi des options statiques ou un callable. Les variantes de select compatibles peuvent activer `searchable`.
