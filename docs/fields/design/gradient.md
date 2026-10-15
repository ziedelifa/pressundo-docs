---
title: 'Gradient'
description: 'Linear/radial two-stop gradient with angle and stop positions.'
---

# Gradient

Linear/radial two-stop gradient with angle and stop positions.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_gradient()</b></div>
<div><span>Type</span><b>gradient</b></div>
<div><span>Stored value</span><b>structured array</b></div>
</div>

## Example

```php
pu_gradient('brand_gradient', ['label' => 'Brand gradient']);
```

## Stored value

Pressundo stores this field as **structured array**. Composite fields keep structured arrays rather than opaque CSS strings, so your application can reuse individual values.

### Storage example

```php
[
    'type'           => 'linear',
    'angle'          => 135,
    'start_color'    => '#2563EB',
    'start_position' => 0,
    'end_color'      => '#7C3AED',
    'end_position'   => 100,
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
