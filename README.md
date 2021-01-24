# crypto-icons-plus
[![Netlify Status](https://api.netlify.com/api/v1/badges/0a5ffb2e-97b8-4e7c-adcf-7e50b986b192/deploy-status)](https://app.netlify.com/sites/crypto-icons-plus/deploys)
A comprehensive collection of more than 16000 crypto-currency icons (4000+ coins) in various sizes. A crypto 

All crypto icons comes in 4 sizes: `16x16`, `32x32`, `64x64`, and `128x128`, in the format of `PNG`.

Checkout supported cryptos at demo site: https://crypto-icons-plus.netlify.app/ (might take a few seconds to load).

To keep up with the volatile crypto-currency industry, we are currently planning for a new release every month (at least).

## Installation and Usage
To install:
```
$ npm install crypto-icons-plus
```

To start using, the icons are under `./node_modules/crypto-icons-plus/src/<size_of_icon>/<crypto_slug>.png`.

The `<size_of_icon>` are either `16`, `32`, `64`, or `128`.

The `<crypto_slug>` is used as the unique identifier for each crypto-currency instead of the traditional crypto `symbol`. This is due to the numerous duplicate cases of crypto `symbol` (There are at least 3 cryptos with the symbol `GOLD`, and at least 5 with the symbol `SCC` !). A `map.json` is provided for mapping crypto `symbol` to its corresponding `slug`(s).

There is also a `manifest.json` for looking up the `symbol`, `name`, and `slug` for each coins.