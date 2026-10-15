---
title: 'Custom Field Type'
---
# Custom Field Type

> **Note FR :** cet exemple copiable est conservé très proche de la source livrée avec le plugin afin que le code reste identique. Les concepts et guides associés sont traduits en français.

```php
use Pressundo\Framework\Contracts\FieldTypeInterface;

final class AcmeUppercaseField implements FieldTypeInterface
{
    public function type(): string
    {
        return 'acme_uppercase';
    }

    public function sanitize(mixed $value, array $field): mixed
    {
        return strtoupper(sanitize_text_field((string) $value));
    }

    public function render(array $field, mixed $value): string
    {
        $name = (string) ($field['name'] ?? $field['id'] ?? 'field');
        $id   = (string) ($field['id'] ?? $name);

        return sprintf(
            '<input class="regular-text" id="%s" name="%s" value="%s">',
            esc_attr($id),
            esc_attr($name),
            esc_attr((string) $value)
        );
    }
}

add_action('pressundo_framework_loaded', function (): void {
    pu_register_field_type(new AcmeUppercaseField());
});
```

Use it in a schema:

```php
pu_field('acme_uppercase', 'reference', [
    'label' => 'Reference',
]);
```
