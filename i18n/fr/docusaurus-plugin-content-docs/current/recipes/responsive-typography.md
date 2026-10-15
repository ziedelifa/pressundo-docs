---
title: 'Recette : typographie responsive'
---

# Recette : typographie responsive

Combinez un preset Typography avec un contrôle Responsive pour conserver des design tokens structurés au lieu de stocker du CSS opaque.

```php
pu_typography('heading_typography', [
  'label' => 'Heading typography',
  'default' => ['font_family' => 'Inter', 'font_weight' => '700', 'color' => '#111827'],
]);

pu_responsive('heading_size', [
  'label' => 'Heading size',
  'units' => ['px', 'rem'],
  'default' => ['desktop' => 48, 'tablet' => 38, 'mobile' => 30, 'unit' => 'px'],
]);
```

Lisez ensuite les deux tableaux structurés et générez le CSS dans la couche thème.
