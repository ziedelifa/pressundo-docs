---
title: 'Remove Vafpress safely'
---
# Remove Vafpress safely

## Before

A legacy theme may contain a bootstrap require such as `require .../vafpress-framework/bootstrap.php` and declarations using `VP_Option` / `VP_Metabox`.

## Migration

1. Back up and test on staging.
2. Install/activate Pressundo.
3. Remove the old Vafpress runtime folder from the theme.
4. Remove the explicit Vafpress bootstrap require.
5. **Do not rename storage keys.**
6. Keep common legacy declarations while validating the site.

Pressundo exposes compatibility classes/functions so standard field declarations continue through the modern renderer.

## Safety boundary

Legacy arbitrary whitelisted PHP callbacks and unsafe PHP template includes are disabled by default. Enabling those escape hatches is a conscious compatibility risk, not the normal migration path.
