---
title: 'Password'
description: 'Champ masqué pour secrets de configuration.'
---

# Password

Champ masqué pour secrets de configuration.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_password()</b></div>
<div><span>Type</span><b>password</b></div>
<div><span>Valeur stockée</span><b>string</b></div>
</div>

## Exemple

```php
pu_password('api_key', ['label' => 'API key']);
```

## Valeur stockée

Pressundo stocke ce champ sous la forme **string**. Les champs composites conservent des tableaux structurés plutôt que des chaînes CSS opaques, afin que votre application puisse réutiliser chaque valeur.

## Arguments importants

Arguments communs : `label`, `description`, `default`, `required`, `show_if`, `hide_if`.

Tous les champs standards peuvent aussi utiliser la visibilité conditionnelle :

```php
'show_if' => ['enabled' => true],
```

## Comportement

- Le même schéma est rendu dans Air, Slate et Compact.
- La sanitization s’exécute avant validation/stockage.
- Les champs masqués par une condition conservent leur valeur stockée sauf modification explicite.
- L’échappement final dépend du contexte et doit être appliqué au moment de l’affichage front-end.

## Notes

This field masks the admin input but does not create encrypted-at-rest storage by itself.

## Lire la valeur

```php
$options = pu_options('theme_settings');
$value = $options->get('example_value', null);
```

Utilisez l’identifiant réel du champ de votre schéma à la place de `example_value`.
