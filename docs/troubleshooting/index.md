---
title: 'Troubleshooting'
---
# Troubleshooting

## Field does not appear

- Confirm the configuration code runs after Pressundo is loaded.
- Confirm the field ID is unique in its scope.
- Check `show_if` / `hide_if` conditions.

## Legacy choices are empty

Pressundo safely parses common Vafpress templates, including simple variable assignments. If a legacy template depends on arbitrary PHP execution, migrate that datasource instead of enabling unsafe includes globally.

## Save refused

A stale-form/concurrent-save guard may have detected newer stored data. Reload the screen, review changes, and save again.

## Need compatibility diagnostics?

Enable the debug-only diagnostics described in [Debug mode](./debug-mode.md).
