---
title: 'Responsive typography recipe'
---
# Responsive typography recipe

Combine a typography preset with a responsive size control when you want reusable design tokens without storing opaque CSS.

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

Read the structured arrays and generate CSS in your theme layer.
