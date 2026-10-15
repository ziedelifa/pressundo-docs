---
title: 'Requirements'
description: 'Prerequisites before using Pressundo.'
---

# Requirements

Pressundo is designed for modern WordPress installations. The stable 1.0 package was validated on PHP 8.2–8.4 during release hardening. Install the plugin as a normal WordPress plugin and load your theme/plugin configuration after Pressundo is available.

## Before you start

- Back up production before replacing a legacy framework.
- Do not load the old Vafpress runtime and Pressundo compatibility runtime together.
- Keep the same option/meta storage keys when preserving existing data.
- Use a staging site for the first Vafpress removal test.

## API version

```php
if (function_exists('pu_api_version') && pu_api_version() === '1') {
    // Public API v1 is available.
}
```
