# crypto-icons-plus
A comprehensive collection of more than 16000 crypto-currency icons (4000+ coins) in various sizes.

All crypto icons comes in 4 sizes: `16x16`, `32x32`, `64x64`, and `128x128`, in the format of `PNG`.

To keep up with the volatile crypto-currency industry, we are currently planning for a new release every month (at least).

## Installation and Usage
To install:
```
$ npm install crypto-icons-plus
```

To start using, the icons are under `./node_modules/crypto-icons-plus/src/<size_of_icon>/<crypto_slug>.png`.

The `<size_of_icon>` are either `16`, `32`, `64`, or `128`.

The `<crypto_slug>` is used as the unique identifier for each crypto-currency instead of the traditional crypto `symbol`. This is due to the numerous duplicate cases of crypto `symbol` (There are at least 3 cryptos with the symbol `GOLD`, and at least 5 with the symbol `SCC` !). A `map.json` is provided for mappin crypto `symbol` to its corresponding `slug`(s).

There is also a `manifest.json` for looking up the `symbol`, `name`, and `slug` for each coins.