---
title: 'Code'
description: 'Code-like textarea. Stored as normalized text and never executed by sanitization.'
---

# Code

Code-like textarea. Stored as normalized text and never executed by sanitization.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_code()</b></div>
<div><span>Type</span><b>code</b></div>
<div><span>Stored value</span><b>string</b></div>
</div>

## Example

```php
pu_code('snippet', ['label' => 'Snippet']);
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

Output or execution of stored code is your application responsibility; Pressundo treats it as inert text.

## Reading the value

```php
$options = pu_options('theme_settings');
$value = $options->get('example_value', null);
```

Use the actual field ID from your schema instead of `example_value`.
