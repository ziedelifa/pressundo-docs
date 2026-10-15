---
title: 'Border Radius'
description: 'Rayons des quatre coins avec link/unlink et unité.'
---

# Border Radius

Rayons des quatre coins avec link/unlink et unité.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_border_radius()</b></div>
<div><span>Type</span><b>border_radius</b></div>
<div><span>Valeur stockée</span><b>tableau structuré</b></div>
</div>

## Exemple

```php
pu_border_radius('card_radius', ['label' => 'Card radius']);
```

## Valeur stockée

Pressundo stocke ce champ sous la forme **tableau structuré**. Les champs composites conservent des tableaux structurés plutôt que des chaînes CSS opaques, afin que votre application puisse réutiliser chaque valeur.

### Exemple de stockage

```php
[
    'top_left' => 16, 'top_right' => 16,
    'bottom_right' => 16, 'bottom_left' => 16,
    'unit' => 'px',
]
```

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

Le champ passe par le processeur central de sanitization et validation avant les sauvegardes admin normales.

## Lire la valeur

```php
$options = pu_options('theme_settings');
$value = $options->get('example_value', null);
```

Utilisez l’identifiant réel du champ de votre schéma à la place de `example_value`.
