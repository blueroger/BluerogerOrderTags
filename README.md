# BluerogerOrderTags

BluerogerOrderTags is an open-source extension for the Shopware administration.
It shows the tags assigned to an order directly in the native order overview
and keeps Shopware's built-in tag filter.

## Status

The order list has a resizable, non-sortable Tags column. Orders without tags
show a dash; orders with one or more tags show each tag as a label. Tag labels
wrap within the column when space is limited. Use Shopware's native tag filter
to narrow the list by tags; this plugin does not add a separate filter.

## Compatibility

- Shopware `>=6.7.3 <6.9.0`
- PHP `>=8.2`

The declared range is the intended compatibility target. Shopware 6.7.9.1 is
the currently verified development environment; complete cross-version release
verification remains pending.

## Installation

Place the plugin in `custom/plugins/BluerogerOrderTags`, then run:

```bash
bin/console plugin:refresh
bin/console plugin:install --activate BluerogerOrderTags
bin/build-administration.sh
```

## Development

Install the project-local quality tools and run all checks:

```bash
composer install
composer qa
```

The local `vendor/` directory contains development tooling only. It is ignored
by Git and excluded from release packages.

## License

Licensed under the [MIT License](LICENSE).
