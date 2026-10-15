---
title: 'Url'
description: 'HTTP/HTTPS URL input. Unsafe schemes are rejected.'
---

# Url

HTTP/HTTPS URL input. Unsafe schemes are rejected.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_url()</b></div>
<div><span>Type</span><b>url</b></div>
<div><span>Stored value</span><b>string</b></div>
</div>

## Example

```php
pu_url('website', ['label' => 'Website']);
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

Pressundo only persists normal HTTP/HTTPS URLs for this field.

## Reading the value

```php
$options = pu_options('theme_settings');
$value = $options->get('example_value', null);
```

Use the actual field ID from your schema instead of `example_value`.
