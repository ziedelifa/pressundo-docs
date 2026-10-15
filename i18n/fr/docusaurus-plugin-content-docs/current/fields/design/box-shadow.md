---
title: 'Box Shadow'
description: 'Box-shadow x/y/blur/spread/couleur/unité/inset.'
---

# Box Shadow

Box-shadow x/y/blur/spread/couleur/unité/inset.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_box_shadow()</b></div>
<div><span>Type</span><b>box_shadow</b></div>
<div><span>Valeur stockée</span><b>tableau structuré</b></div>
</div>

## Exemple

```php
pu_box_shadow('card_shadow', ['label' => 'Card shadow']);
```

## Valeur stockée

Pressundo stocke ce champ sous la forme **tableau structuré**. Les champs composites conservent des tableaux structurés plutôt que des chaînes CSS opaques, afin que votre application puisse réutiliser chaque valeur.

### Exemple de stockage

```php
[
    'x' => 0, 'y' => 12, 'blur' => 30, 'spread' => 0,
    'color' => '#000000', 'unit' => 'px', 'inset' => false,
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
