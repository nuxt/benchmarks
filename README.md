# Nuxt.js SSR performance Benchmarks
[![CircleCI](https://circleci.com/gh/pi0/nuxt-benchmarks.svg?style=svg)](https://circleci.com/gh/pi0/nuxt-benchmarks)

## Results 

- [2.3](https://7-92208367-gh.circle-artifacts.com/0/usr/src/app/benchmarks/2.3.html)
- [2.3 with gzip enabled](https://7-92208367-gh.circle-artifacts.com/0/usr/src/app/benchmarks/2.3-gzip.html)
- [dev](https://7-92208367-gh.circle-artifacts.com/0/usr/src/app/benchmarks/dev.html)   

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

# run benchmarks
$ npm run benchmark

```
