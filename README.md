# GAME API
Just a simple [hapi JS](https://hapi.dev/) REST API that can be used for training purposes.
Note: This is still WIP!

## Getting Started
```bash
npm i
npm run start
```
The server is accessible at [`http://localhost:3000`](http://localhost:3000)

## Current Iteration
- Returns a list of games I own for a variety of systems, sourced from hardcoded JS objects
- Endpoints:
    - `/`
    - `/documentation` _(auto-generated)_
    - `/microsoft`
    - `/nintendo`
    - `/playstation`
    - `/sony`
    - `/xbox`

## Dependencies
- [hapi](https://hapi.dev/): The API framework that runs the whole application
- [hapi-swagger](https://github.com/glennjones/hapi-swagger): Auto-generated Swagger documentation plugin
    - [hapi/inert](https://hapi.dev/family/inert): Static file & directory handling plugin
    - [hapi/vision](https://hapi.dev/family/vision): Template rendering plugin
    - [joi](https://joi.dev/): Object schema validator
- [nodemon](https://nodemon.io/): Development tool that auto-restarts the application when changes are made