# crypto-icons-plus
[![Netlify Status](https://api.netlify.com/api/v1/badges/0a5ffb2e-97b8-4e7c-adcf-7e50b986b192/deploy-status)](https://app.netlify.com/sites/crypto-icons-plus/deploys)
![Node Test](https://github.com/Isaac-the-Man/crypto-icons-plus/workflows/Node.js%20CI/badge.svg)

A comprehensive collection of more than 36000 crypto-currency icons (9000+ coins) in various sizes. 

All crypto icons comes in 4 sizes: `16x16`, `32x32`, `64x64`, and `128x128`, in the format of `PNG`.

Checkout the list of supported cryptos at the demo site: https://crypto-icons-plus.netlify.app/.

## Major Changes
- Version 1.0.0
	- Previous versions 0.1.5 and below are deprecated and will no longer be updated.
	- Icons are now separated in different packages by size.
	- Added 5000+ more icons
	- Minified JSONs

## Installation and Usage
**Since version 1.0 there have been breaking changes to the entire project infrastructure. This package only includes the necessary files to index the images (`map.min.json` and `manifest.min.json`). Actual icon resources are downloaded separately in the following packages by their respective size.**

- [crypto-icons-plus-16](https://github.com/Isaac-the-Man/crypto-icons-plus-16) (16x16)
- [crypto-icons-plus-32](https://github.com/Isaac-the-Man/crypto-icons-plus-32) (32x32)
- [crypto-icons-plus-64](https://github.com/Isaac-the-Man/crypto-icons-plus-64) (64x64)
- [crypto-icons-plus-128](https://github.com/Isaac-the-Man/crypto-icons-plus-128) (128x128)

First install the main package:

```
$ npm install crypto-icons-plus
```

Then install the resource packs (replace `<size>` with `16`, `32`, `64`, or `128`):

```
$ npm install crypto-icons-plus-<size>
```

Resource packs can also be cloned from github as an alternative to using npm. All the resource packs have the same crypto icons, with the only difference being dimension. Multiple resource packs can be installed.

To start using (assuming installed from npm), the icons are under `./node_modules/crypto-icons-plus-<size_of_icon>/src/<crypto_slug>.png`.

The `<size_of_icon>` are either `16`, `32`, `64`, or `128`.

The `<crypto_slug>` is used as the unique identifier for each crypto-currency instead of the traditional crypto `symbol`. This is due to the numerous duplicate cases of crypto `symbol` (There are at least 3 cryptos with the symbol `GOLD`, and at least 5 with the symbol `SCC` !). A `map.json` is provided for mapping crypto `symbol` to its corresponding `slug`(s).

There is also a `manifest.json` for looking up the `symbol`, `name`, and `slug` for each coins.
