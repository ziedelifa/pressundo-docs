---
title: 'Common field arguments'
---
# Common field arguments

Most fields accept an argument array. Exact type-specific arguments are documented on each field page.

| Argument | Purpose |
|---|---|
| `label` | Human-readable admin label. |
| `description` | Supporting/help text. |
| `default` | Default value when none is stored. |
| `required` | Require a valid non-empty value. |
| `show_if` | Show when conditions match. |
| `hide_if` | Hide when conditions match. |
| `condition_relation` | Combine multiple rules using `and` or `or`. |
| `migrate_from` | Legacy source declaration for progressive migration. |

Choice fields also accept static or callable options, and supported select variants can opt into `searchable`.
