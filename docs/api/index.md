---
title: 'Public API v1'
description: 'Stable Pressundo public API reference.'
---
# Public API v1

Pressundo Framework 1.0 freezes Public API **v1**. The helper surface contains 68 `pu_*` helpers plus `pu_api_version()`.

```php
if (pu_api_version() !== '1') {
    // Handle a future incompatible API line explicitly.
}
```

See [Helper index](/docs/reference/helper-index) for the complete signatures and [API freeze](/docs/reference/api-freeze) for the release contract.
