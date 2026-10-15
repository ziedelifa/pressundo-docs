---
title: 'Progressive migration'
---
# Progressive migration

Pressundo supports three non-destructive strategies:

| Strategy | Behavior |
|---|---|
| `preserve` | Existing legacy storage stays the source of truth. New installations use modern storage. |
| `lazy` | Read legacy only when modern is missing, copy the accessed value once, then use modern. |
| `copy` | Use modern storage while synchronizing existing legacy storage for rollback/backward compatibility. |

There is intentionally no destructive `move` strategy in Free 1.0.

Field/config mapping can use `migrate_from` plus optional `from_legacy`, `to_legacy` and `sanitize` callbacks.
