---
title: 'Public helper index'
---
# Public helper index

> **Référence source :** cette page conserve volontairement le contrat technique anglais fourni avec Pressundo 1.0.0 pour rester alignée avec la distribution. Les guides explicatifs autour de cette référence sont disponibles en français.

The 1.0 stable Public API v1 exposes these helpers:

- `pu_get(string $key, mixed $default = null, array $args = [])`
- `pu_set(string $key, mixed $value, array $args = [])`
- `pu_delete(string $key, array $args = [])`
- `pu_exists(string $key, array $args = [])`
- `pu_options(string $name, array $config = [])`
- `pu_meta(int $postId, string $name, array $config = [])`
- `pu_api_version()`
- `pu_field(string $type, string $id, array $args = [])`
- `pu_text(string $id, array $args = [])`
- `pu_textarea(string $id, array $args = [])`
- `pu_select(string $id, array|callable $options = [], array $args = [])`
- `pu_checkbox(string $id, array $args = [])`
- `pu_toggle(string $id, array $args = [])`
- `pu_group(string $id, array $fields, array $args = [])`
- `pu_repeater(string $id, array $fields, array $args = [])`
- `pu_section(string $id, array $fields, array $args = [])`
- `pu_register_field_type(\Pressundo\Framework\Contracts\FieldTypeInterface $field)`
- `pu_has_field_type(string $type)`
- `pu_field_types()`
- `pu_sanitize_field(array $field, mixed $value)`
- `pu_validate_field(array $field, mixed $value)`
- `pu_number(string $id, array $args = [])`
- `pu_email(string $id, array $args = [])`
- `pu_url(string $id, array $args = [])`
- `pu_radio(string $id, array|callable $options = [], array $args = [])`
- `pu_multiselect(string $id, array|callable $options = [], array $args = [])`
- `pu_checkbox_group(string $id, array|callable $options = [], array $args = [])`
- `pu_color(string $id, array $args = [])`
- `pu_date(string $id, array $args = [])`
- `pu_time(string $id, array $args = [])`
- `pu_range(string $id, array $args = [])`
- `pu_media(string $id, array $args = [])`
- `pu_gallery(string $id, array $args = [])`
- `pu_editor(string $id, array $args = [])`
- `pu_code(string $id, array $args = [])`
- `pu_icon(string $id, array $args = [])`
- `pu_sortable(string $id, array|callable $options = [], array $args = [])`
- `pu_resolve_options(array $field)`
- `pu_field_visible(array $field, array $values)`
- `pu_options_page(array $config)`
- `pu_metabox(array $config)`
- `pu_font_family(string $id, array $args = [])`
- `pu_font_weight(string $id, array $args = [])`
- `pu_unit(string $id, array $args = [])`
- `pu_typography(string $id, array $args = [])`
- `pu_spacing(string $id, array $args = [])`
- `pu_dimensions(string $id, array $args = [])`
- `pu_background(string $id, array $args = [])`
- `pu_gradient(string $id, array $args = [])`
- `pu_border(string $id, array $args = [])`
- `pu_border_radius(string $id, array $args = [])`
- `pu_box_shadow(string $id, array $args = [])`
- `pu_responsive(string $id, array $args = [])`
- `pu_button_group(string $id, array $options = [], array $args = [])`
- `pu_datetime(string $id, array $args = [])`
- `pu_post_select(string $id, array $args = [])`
- `pu_term_select(string $id, array $args = [])`
- `pu_user_select(string $id, array $args = [])`
- `pu_menu_select(string $id, array $args = [])`
- `pu_sidebar_select(string $id, array $args = [])`
- `pu_template_select(string $id, array $args = [])`
- `pu_key_value(string $id, array $args = [])`
- `pu_hidden(string $id, array $args = [])`
- `pu_password(string $id, array $args = [])`
- `pu_json(string $id, array $args = [])`
- `pu_css(string $id, array $args = [])`
- `pu_javascript(string $id, array $args = [])`
- `pu_heading(string $id, string $text, array $args = [])`
- `pu_divider(string $id, array $args = [])`

Do not parse this page as a replacement for PHP type information; it is a navigational index. Field-specific behavior is documented in [Fields](/fields).
