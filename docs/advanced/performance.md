---
title: 'Performance'
---
# Performance

Pressundo only loads admin assets where a Pressundo schema is rendered. Media-library assets are requested only when the schema contains a media-capable field, including nested media/gallery fields.

The 0.13 benchmark used during framework development rendered 500 simple fields in a few milliseconds of PHP time on the test environment; treat benchmark numbers as comparative rather than universal because hosting hardware varies.

For large schemas:

- Prefer sections to organize long forms.
- Use dynamic options carefully; request caching prevents repeated callback work.
- Avoid unbounded repeaters.
- Use dedicated WordPress selectors instead of repeatedly querying entities yourself.
