---
title: 'Password'
description: 'Masked text input for configuration secrets.'
---

# Password

Masked text input for configuration secrets.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_password()</b></div>
<div><span>Type</span><b>password</b></div>
<div><span>Stored value</span><b>string</b></div>
</div>

## Example

```php
pu_password('api_key', ['label' => 'API key']);
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

This field masks the admin input but does not create encrypted-at-rest storage by itself.

## Reading the value

```php
$options = pu_options('theme_settings');
$value = $options->get('example_value', null);
```

Use the actual field ID from your schema instead of `example_value`.
