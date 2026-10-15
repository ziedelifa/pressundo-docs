---
title: 'Internals legacy non pris en charge'
---

# Internals legacy non pris en charge

Pressundo ne promet pas une émulation drop-in de tous les internals Vafpress non documentés. À migrer notamment :

- utilisation/sous-classement direct de `VP_Control_Field_*` internes ;
- callbacks personnalisés de dependency/binding dépendant de l’ancien AJAX ;
- views/assets Vafpress utilisés directement ;
- internals WPAlchemy non documentés au-delà de la façade commune auditée ;
- ancien runtime TinyMCE/AJAX du Shortcode Generator.

La façade sûre `VP_ShortcodeGenerator` permet construction/pool/découverte de tags, mais l’ancien runtime obsolète n’est volontairement pas ressuscité.
