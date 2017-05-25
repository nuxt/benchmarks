# Nuxt.js SSR performance Benchmarks
[![CircleCI](https://circleci.com/gh/nuxt/benchmarks.svg?style=svg)](https://circleci.com/gh/nuxt/benchmarks)

## Results 

- [starter-2.3](https://4-92262896-gh.circle-artifacts.com/0/usr/src/app/benchmarks/starter-2.3.html)
- [starter-dev](https://4-92262896-gh.circle-artifacts.com/0/usr/src/app/benchmarks/starter-dev.html)   

## Testing environment specs
- Using nuxt 1.0.0-alpha1
- `gzip` disabled
- `extractCSS` enabled
- **25** parallel requests for **10** seconds (up to 5000 samples)  
- Using store and plugins

## Running locally

``` bash
# install dependencies
$ npm install # Or yarn install

# run benchmarks on starter
$ npm run benchmark-starter

# run benchmarks on nxutjs.org website
$ npm run benchmark-website

```
