---
title: 'Pressundo Framework'
description: 'Modern WordPress options and metaboxes with Vafpress compatibility.'
---

# Pressundo Framework

Pressundo Framework is a **modern WordPress options and metabox framework** with a stable Public API v1 and a compatibility runtime for existing Vafpress projects.

Use it in two ways:

- **New projects:** build with the `pu_*` API from day one.
- **Existing Vafpress themes:** remove the abandoned Vafpress runtime, keep common `VP_Option` / `VP_Metabox` code temporarily, preserve existing data, and migrate progressively.

<div className="pressundo-kv">
<div><span>Public API</span><b>v1</b></div>
<div><span>Field types</span><b>53</b></div>
<div><span>Vafpress fields</span><b>20 / 20 automatic</b></div>
</div>

## What Pressundo includes

- Modern options pages with `pu_options_page()`.
- Modern post metaboxes with `pu_metabox()`.
- Air, Slate and Compact admin skins.
- Text, choice, media, layout, typography, responsive and WordPress selector fields.
- Groups, repeaters and sortable controls.
- Conditional logic and dynamic options.
- Central sanitization and validation.
- Progressive storage migration: `preserve`, `lazy`, and `copy`.
- Safe Vafpress compatibility without shipping the old Vafpress runtime.
- Concurrent-save protection for option pages and metaboxes.

## Recommended path

If this is a new project, continue with the [5-minute quick start](./getting-started/quick-start.md).

If you maintain a Vafpress theme, start with [Remove Vafpress safely](./vafpress-migration/remove-vafpress.md).
