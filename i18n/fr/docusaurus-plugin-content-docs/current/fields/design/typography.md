---
title: 'Typography'
description: 'Contrôle typographique complet : famille, graisse, taille, line-height, tracking, transformation, décoration et couleur.'
---

# Typography

Contrôle typographique complet : famille, graisse, taille, line-height, tracking, transformation, décoration et couleur.

<div className="pressundo-kv">
<div><span>Helper</span><b>pu_typography()</b></div>
<div><span>Type</span><b>typography</b></div>
<div><span>Valeur stockée</span><b>tableau structuré</b></div>
</div>

## Exemple

```php
pu_typography('heading_typography', ['label' => 'Heading typography', 'default' => ['font_family' => 'Inter', 'font_weight' => '700', 'font_size' => 42, 'font_size_unit' => 'px', 'line_height' => 1.2, 'color' => '#111827']]);
```

## Valeur stockée

Pressundo stocke ce champ sous la forme **tableau structuré**. Les champs composites conservent des tableaux structurés plutôt que des chaînes CSS opaques, afin que votre application puisse réutiliser chaque valeur.

### Exemple de stockage

```php
[
    'font_family'         => 'Inter',
    'font_weight'         => '700',
    'font_size'           => 42,
    'font_size_unit'      => 'px',
    'line_height'         => 1.2,
    'letter_spacing'      => -0.6,
    'letter_spacing_unit' => 'px',
    'text_transform'      => 'none',
    'text_decoration'     => 'none',
    'color'               => '#111827',
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
