---
title: 'Security model'
---
# Security model

Pressundo 1.0 was hardened before stable release. Its admin save path combines WordPress nonce/capability checks, centralized sanitization/validation, protocol restrictions, safe legacy defaults and a revision guard against stale-form overwrites.

Key defaults:

- Arbitrary whitelisted legacy callbacks: **off**.
- Unsafe legacy template include fallback: **off**.
- URL/media URL protocols: HTTP/HTTPS only.
- Unknown field fallback: recursively sanitized.
- Repeater server hard limit: 250 rows by default.
- Code/CSS/JavaScript fields: stored as inert normalized text, never executed by field sanitization.
