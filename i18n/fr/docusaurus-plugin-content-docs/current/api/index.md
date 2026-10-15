---
title: 'API publique v1'
description: 'Référence de l’API publique stable Pressundo.'
---

# API publique v1

Pressundo Framework 1.0 fige l’**API publique v1**. La surface comporte 68 helpers `pu_*` plus `pu_api_version()`.

```php
if (pu_api_version() !== '1') {
    // Gérer explicitement une future ligne API incompatible.
}
```

Consultez l’[index des helpers](/fr/reference/helper-index) pour les signatures et le [gel API](/fr/reference/api-freeze) pour le contrat de release.
