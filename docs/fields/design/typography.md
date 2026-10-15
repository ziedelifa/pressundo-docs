---
title: 'Typography'
description: 'Composite typography control: family, weight, size, line-height, tracking, transform, decoration and color.'
---

# Typography

Composite typography control: family, weight, size, line-height, tracking, transform, decoration and color.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_typography()</b></div>
<div><span>Type</span><b>typography</b></div>
<div><span>Stored value</span><b>structured array</b></div>
</div>

## Example

```php
pu_typography('heading_typography', ['label' => 'Heading typography', 'default' => ['font_family' => 'Inter', 'font_weight' => '700', 'font_size' => 42, 'font_size_unit' => 'px', 'line_height' => 1.2, 'color' => '#111827']]);
```

## Stored value

Pressundo stores this field as **structured array**. Composite fields keep structured arrays rather than opaque CSS strings, so your application can reuse individual values.

### Storage example

```php
[
    'font_family'         => 'Inter',
    'font_weight'         => '700',
    'font_size'           => 42,
    'font_size_unit'      => 'px',
    'line_height'         => 1.2,
    'letter_spacing'      => -0.6,
    'letter_spacing_unit' => 'px',
    'text_transform'      => 'none',
    'text_decoration'     => 'none',
    'color'               => '#111827',
]
```

## Important arguments

Common field arguments: `label`, `description`, `default`, `required`, `show_if`, `hide_if`.

All normal fields can also use conditional visibility:

```php
'show_if' => ['enabled' => true],
```

## Behavior

- The same schema renders in Air, Slate and Compact.
- Sanitization runs before validation/storage.
- Hidden conditional fields keep their stored value unless your application explicitly changes it.
- Output escaping remains contextual and should be applied where the value is rendered on the front end.

## Notes

The field is sanitized and validated through the central field-value processor before normal admin saves.

## Reading the value

```php
$options = pu_options('theme_settings');
$value = $options->get('example_value', null);
```

Use the actual field ID from your schema instead of `example_value`.
