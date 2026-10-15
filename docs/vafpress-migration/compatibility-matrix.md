---
title: 'Vafpress field compatibility matrix'
---
# Vafpress field compatibility matrix

Pressundo 1.0 maps all **20/20 standard Vafpress field types** automatically:

| Vafpress | Pressundo | Status |
|---|---|---|
| `textbox` | `text` | Automatic |
| `textarea` | `textarea` | Automatic |
| `toggle` | `toggle` | Automatic |
| `select` | `select` | Automatic |
| `multiselect` | `multi_select` | Automatic |
| `radiobutton` | `radio` | Automatic |
| `radioimage` | `image_radio` | Automatic |
| `checkbox` | `checkbox_group` | Automatic |
| `checkimage` | `image_checkbox_group` | Automatic |
| `slider` | `range` | Automatic |
| `upload` | `media` | Automatic |
| `date` | `date` | Automatic |
| `color` | `color` | Automatic |
| `codeeditor` | `code` | Automatic |
| `html` | `html` | Automatic |
| `notebox` | `notice` | Automatic |
| `fontawesome` | `icon` | Automatic |
| `wpeditor` | `editor` | Automatic |
| `sorter` | `sortable_select` | Automatic |
| `group` | `group` | Automatic |

This matrix covers standard field types. Direct extensions of undocumented Vafpress internals are outside the automatic-compatibility promise.
