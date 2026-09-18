# BluerogerOrderTags

BluerogerOrderTags is an open-source extension for the Shopware administration.
Its first release will show the tags assigned to an order directly in the
native order overview while keeping Shopware's built-in tag filter.

## Status

The installable plugin foundation is in place. The order-list feature itself is
not part of this repository state yet.

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
