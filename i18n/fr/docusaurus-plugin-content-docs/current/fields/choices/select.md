---
title: 'Select'
description: 'Select simple. Activez `searchable` pour les grandes listes.'
---

# Select

Select simple. Activez `searchable` pour les grandes listes.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_select()</b></div>
<div><span>Type</span><b>select</b></div>
<div><span>Valeur stockée</span><b>string|int</b></div>
</div>

## Exemple

```php
pu_select('layout', ['boxed' => 'Boxed', 'wide' => 'Wide'], ['label' => 'Layout', 'searchable' => true]);
```

## Valeur stockée

Pressundo stocke ce champ sous la forme **string|int**. Les champs composites conservent des tableaux structurés plutôt que des chaînes CSS opaques, afin que votre application puisse réutiliser chaque valeur.

## Arguments importants

`options`, `searchable`

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
