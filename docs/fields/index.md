---
title: 'All fields'
description: 'Complete Pressundo field reference.'
---
# All 53 field types

Pressundo 1.0 registers **53 field types**. Every normal field uses the same schema model, centralized sanitization/validation, conditional logic hooks and shared renderer.

- [Text](./basic/text.md) — `pu_text()` — Single-line text input.
- [Textarea](./basic/textarea.md) — `pu_textarea()` — Multi-line plain text input.
- [Number](./basic/number.md) — `pu_number()` — Numeric input with min/max/step validation.
- [Email](./basic/email.md) — `pu_email()` — Email input validated as an email address.
- [Url](./basic/url.md) — `pu_url()` — HTTP/HTTPS URL input. Unsafe schemes are rejected.
- [Password](./basic/password.md) — `pu_password()` — Masked text input for configuration secrets.
- [Hidden](./basic/hidden.md) — `pu_hidden()` — Hidden field for internal schema data.
- [Date](./basic/date.md) — `pu_date()` — Calendar date input with real-date validation.
- [Time](./basic/time.md) — `pu_time()` — 24-hour time input.
- [Datetime](./basic/datetime.md) — `pu_datetime()` — Combined local date and time control.
- [Range](./basic/range.md) — `pu_range()` — Slider/range input with min/max/step.
- [Color](./basic/color.md) — `pu_color()` — Color picker stored as canonical uppercase HEX.
- [Checkbox](./basic/checkbox.md) — `pu_checkbox()` — Single boolean checkbox.
- [Toggle](./basic/toggle.md) — `pu_toggle()` — Modern boolean switch.
- [Select](./choices/select.md) — `pu_select()` — Single select. Enable `searchable` for large lists.
- [Multi Select](./choices/multi-select.md) — `pu_multiselect()` — Multiple selected values with allowed-option validation.
- [Radio](./choices/radio.md) — `pu_radio()` — Single choice rendered as radio controls.
- [Checkbox Group](./choices/checkbox-group.md) — `pu_checkbox_group()` — Multiple choices rendered as checkbox cards/controls.
- [Button Group](./choices/button-group.md) — `pu_button_group()` — Compact segmented single-choice control.
- [Image Radio](./choices/image-radio.md) — `pu_field()` — Single image-based choice.
- [Image Checkbox Group](./choices/image-checkbox-group.md) — `pu_field()` — Multiple image-based choices.
- [Sortable Select](./choices/sortable-select.md) — `pu_sortable()` — Ordered list with drag-and-drop plus keyboard-accessible move actions.
- [Media](./content/media.md) — `pu_media()` — WordPress media selector with lazy preview.
- [Gallery](./content/gallery.md) — `pu_gallery()` — WordPress gallery selector with deduplication and lazy thumbnails.
- [Editor](./content/editor.md) — `pu_editor()` — WordPress rich-text editor field.
- [Code](./content/code.md) — `pu_code()` — Code-like textarea. Stored as normalized text and never executed by sanitization.
- [Json](./content/json.md) — `pu_json()` — JSON editor with JSON validity checking.
- [Css](./content/css.md) — `pu_css()` — CSS source editor stored as inert text.
- [Javascript](./content/javascript.md) — `pu_javascript()` — JavaScript source editor stored as inert text.
- [Icon](./content/icon.md) — `pu_icon()` — Icon identifier selector compatible with the framework icon datasource.
- [Font Family](./design/font-family.md) — `pu_font_family()` — Searchable font-family selector.
- [Font Weight](./design/font-weight.md) — `pu_font_weight()` — Font-weight selector.
- [Unit](./design/unit.md) — `pu_unit()` — CSS unit selector.
- [Typography](./design/typography.md) — `pu_typography()` — Composite typography control: family, weight, size, line-height, tracking, transform, decoration and color.
- [Spacing](./design/spacing.md) — `pu_spacing()` — Top/right/bottom/left spacing with units and linked-value UX.
- [Dimensions](./design/dimensions.md) — `pu_dimensions()` — Width/height/min/max dimensions with unit.
- [Background](./design/background.md) — `pu_background()` — Composite background: color, image, position, size, repeat, attachment or gradient.
- [Gradient](./design/gradient.md) — `pu_gradient()` — Linear/radial two-stop gradient with angle and stop positions.
- [Border](./design/border.md) — `pu_border()` — Border width/style/color/unit.
- [Border Radius](./design/border-radius.md) — `pu_border_radius()` — Four corner radii with link/unlink UX and unit.
- [Box Shadow](./design/box-shadow.md) — `pu_box_shadow()` — Box-shadow x/y/blur/spread/color/unit/inset.
- [Responsive](./design/responsive.md) — `pu_responsive()` — Desktop/tablet/mobile values with a unit.
- [Post Select](./wordpress/post-select.md) — `pu_post_select()` — Search/select posts, pages or custom post types.
- [Term Select](./wordpress/term-select.md) — `pu_term_select()` — Select taxonomy terms.
- [User Select](./wordpress/user-select.md) — `pu_user_select()` — Select WordPress users.
- [Menu Select](./wordpress/menu-select.md) — `pu_menu_select()` — Select a registered WordPress nav menu.
- [Sidebar Select](./wordpress/sidebar-select.md) — `pu_sidebar_select()` — Select a registered sidebar/widget area.
- [Template Select](./wordpress/template-select.md) — `pu_template_select()` — Select an available template/layout value.
- [Key Value](./presentation/key-value.md) — `pu_key_value()` — Editable key/value mapping rows.
- [Html](./presentation/html.md) — `pu_field()` — Filtered HTML presentation field.
- [Notice](./presentation/notice.md) — `pu_field()` — Admin notice/information block.
- [Heading](./presentation/heading.md) — `pu_heading()` — Visual heading inside a section.
- [Divider](./presentation/divider.md) — `pu_divider()` — Visual divider between field groups.

## Structural helpers

`pu_group()`, `pu_repeater()` and `pu_section()` are structural schema helpers documented separately.
