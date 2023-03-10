#!/usr/bin/env node

require("yargonaut")
  .style('blue')
  .style('yellow', 'required')
  .help('Cybermedium')
  .helpStyle('green')
  .errorsStyle('red.bold.underline')

let yargs = require('yargs/yargs')

let argv = yargs(process.argv.slice(2))
  .help().argv;

if (argv._[0] != undefined) {
  console.log('hi');
} else {
  console.log('bye');
}