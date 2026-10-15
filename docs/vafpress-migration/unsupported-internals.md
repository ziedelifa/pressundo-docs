---
title: 'Unsupported legacy internals'
---
# Unsupported legacy internals

Pressundo does **not** promise drop-in emulation of every undocumented Vafpress internal. Examples that should be migrated include:

- Direct subclassing/use of internal `VP_Control_Field_*` classes.
- Arbitrary custom dependency/binding callbacks expecting old AJAX execution.
- Old Vafpress views/assets used directly.
- Undocumented WPAlchemy internals beyond the audited common facade.
- The obsolete TinyMCE/AJAX runtime of the old shortcode generator.

The safe `VP_ShortcodeGenerator` facade exists for construction/pool/tag discovery, but the obsolete runtime is intentionally not resurrected.
