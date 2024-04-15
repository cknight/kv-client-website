# Website

This website hosts documentation for the
[KV Client](https://github.com/cknight/kv-client) application. It is built using
[Docusaurus](https://docusaurus.io/).

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service. You can then run the following
to test the production build:

```
$ npm run serve
```

### Deployment

From the build directory, run the following to deploy:

```sh
$ deployctl deploy include=.
```
