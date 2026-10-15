---
title: 'Checkbox'
description: 'Single boolean checkbox.'
---

# Checkbox

Single boolean checkbox.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_checkbox()</b></div>
<div><span>Type</span><b>checkbox</b></div>
<div><span>Stored value</span><b>bool</b></div>
</div>

## Example

```php
pu_checkbox('show_author', ['label' => 'Show author']);
```

## Stored value

Pressundo stores this field as **bool**. Composite fields keep structured arrays rather than opaque CSS strings, so your application can reuse individual values.

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
