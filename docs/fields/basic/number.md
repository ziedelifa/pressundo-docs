---
title: 'Number'
description: 'Numeric input with min/max/step validation.'
---

# Number

Numeric input with min/max/step validation.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_number()</b></div>
<div><span>Type</span><b>number</b></div>
<div><span>Stored value</span><b>int|float</b></div>
</div>

## Example

```php
pu_number('columns', ['label' => 'Columns', 'min' => 1, 'max' => 6, 'step' => 1]);
```

## Stored value

Pressundo stores this field as **int|float**. Composite fields keep structured arrays rather than opaque CSS strings, so your application can reuse individual values.

## Important arguments

`min`, `max`, `step`

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
