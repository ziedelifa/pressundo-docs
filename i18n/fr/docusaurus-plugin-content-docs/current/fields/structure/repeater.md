---
title: 'Repeater'
---

# Repeater

`pu_repeater()` stocke une liste de lignes structurées et permet l’ajout, la suppression, la duplication, le collapse et le tri par drag & drop. Les actions de déplacement clavier restent disponibles pour l’accessibilité.

```php
pu_repeater('team', [
    pu_text('name', ['label' => 'Name', 'required' => true]),
    pu_text('role', ['label' => 'Role']),
    pu_media('photo', ['label' => 'Photo']),
], [
    'label' => 'Team members',
    'min_rows' => 1,
    'max_rows' => 20,
]);
```

Une limite de sécurité serveur de **250 lignes** s’applique par défaut, indépendamment de `max_rows` dans l’interface.
