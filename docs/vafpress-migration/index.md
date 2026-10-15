---
title: 'Vafpress migration'
description: 'Remove Vafpress without throwing away working theme code or stored data.'
---
# Vafpress migration

Pressundo was designed so a developer does **not** have to rewrite every customer site before removing Vafpress.

Recommended sequence:

1. Install Pressundo Framework.
2. Remove the old `vafpress-framework/` runtime and its bootstrap require.
3. Keep common `VP_Option`, `VP_Metabox`, `vp_option()` and `vp_metabox()` calls temporarily.
4. Verify existing option/meta data is still read using the same keys.
5. Add new fields with the modern Pressundo API where useful.
6. Migrate legacy declarations progressively.

The compatibility runtime deliberately does not restore unsafe or obsolete internals such as arbitrary legacy AJAX execution.
