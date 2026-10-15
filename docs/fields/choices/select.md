---
title: 'Select'
description: 'Single select. Enable `searchable` for large lists.'
---

# Select

Single select. Enable `searchable` for large lists.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_select()</b></div>
<div><span>Type</span><b>select</b></div>
<div><span>Stored value</span><b>string|int</b></div>
</div>

## Example

```php
pu_select('layout', ['boxed' => 'Boxed', 'wide' => 'Wide'], ['label' => 'Layout', 'searchable' => true]);
```

## Stored value

Pressundo stores this field as **string|int**. Composite fields keep structured arrays rather than opaque CSS strings, so your application can reuse individual values.

## Important arguments

`options`, `searchable`

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
