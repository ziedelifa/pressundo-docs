---
title: 'Section'
---
# Section

`pu_section()` groups fields for an options page or metabox. Sections are schema objects; they do not create independent storage.

```php
pu_section('branding', [
    pu_media('logo', ['label' => 'Logo']),
    pu_color('brand_color', ['label' => 'Brand color']),
], ['title' => 'Branding']);
```
