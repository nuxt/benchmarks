# Nuxt.js SSR performance Benchmarks

## Results 
(Automated CI results coming soon)

- [2.3](https://rawgit.com/pi0/nuxt-benchmarks/master/benchmarks/2.3.html)
- [2.3 with gzip enabled](https://rawgit.com/pi0/nuxt-benchmarks/master/benchmarks/2.3-gzip.html)
- [dev](https://rawgit.com/pi0/nuxt-benchmarks/master/benchmarks/dev.html)   

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
