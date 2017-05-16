#!/usr/bin/env node
var meow = require('meow');
var createServiceWorker = require('./src/create-service-worker');
var cli = meow(`
    Usage
      $ mock-service <apifile> <destinationfile>

    Examples
      $ mock-service api.js service-worker.js
`, {});
createServiceWorker(cli.input[0],cli.input[1]);
