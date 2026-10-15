---
title: 'Recette : repeater équipe'
---

# Recette : repeater équipe

```php
pu_repeater('team', [
  pu_text('name', ['label' => 'Name', 'required' => true]),
  pu_text('role', ['label' => 'Role']),
  pu_media('photo', ['label' => 'Photo']),
  pu_url('profile_url', ['label' => 'Profile URL']),
], [
  'label' => 'Team members',
  'max_rows' => 24,
]);
```

Les lignes se réordonnent avec le drag handle ; le menu fournit Duplicate/Delete/Move et les erreurs de validation des champs enfants remontent correctement.
