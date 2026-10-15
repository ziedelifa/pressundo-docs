---
title: 'Options page configuration'
---
# Options page configuration

| Key | Purpose |
|---|---|
| `id` | Stable page/schema identifier. |
| `title` | Admin page title. |
| `storage_key` | WordPress option name containing the value array. |
| `ui_theme` | `air`, `slate`, or `compact`. |
| `sections` | Array of `pu_section()` schemas. |

Keep `storage_key` stable once a site is in production. Changing it changes where values are read/written.
