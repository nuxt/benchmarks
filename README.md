# Nuxt.js SSR performance Benchmarks

## Running locally

``` bash
# install dependencies
$ npm install # Or yarn install

# run benchmarks
$ npm run benchmark

```
## Common tests spec
- using nuxt 1.0.0-alpha1
- gzip disabled
- extractCSS enabled
- **25** parallel requests for **10** seconds (up to 5000 samples)  
- using store and plugins

## Results 
(Automated CI results coming soon)

- [2.3](./benchmarks/2.3.html)
- [2.3 with gzip enabled](./benchmarks/2.3-gzip.html)
- [dev](./benchmarks/dev.html)   
