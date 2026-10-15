---
title: 'Font Family'
description: 'Searchable font-family selector.'
---

# Font Family

Searchable font-family selector.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_font_family()</b></div>
<div><span>Type</span><b>font_family</b></div>
<div><span>Stored value</span><b>string</b></div>
</div>

## Example

```php
pu_font_family('body_font', ['label' => 'Body font', 'default' => 'Inter']);
```

## Stored value

Pressundo stores this field as **string**. Composite fields keep structured arrays rather than opaque CSS strings, so your application can reuse individual values.

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

Selecting a font does not automatically force external font loading; font selection and loading are separate concerns.

## Reading the value

```php
$options = pu_options('theme_settings');
$value = $options->get('example_value', null);
```

Use the actual field ID from your schema instead of `example_value`.
