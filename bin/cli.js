#!/usr/bin/env node

require("yargonaut")
  .style('blue')
  .style('yellow', 'required')
  .help('Cybermedium')
  .helpStyle('green')
  .errorsStyle('red.bold.underline')

let yargs = require('yargs/yargs')

let argv = yargs(process.argv.slice(2)).help().argv;

let cmd = argv._[0]
let subCMD = argv._[1]

let akat = require('./index')

if (cmd != undefined) {
  if (cmd == 'tydon' || cmd == 'tyDon') {
    if (subCMD != undefined) {
      console.log(akat.tyDon(subCMD));
    } else {
      console.log(akat.tyDon())
    }
  } else if (cmd == 'ranString' || cmd == 'ranstring') {
    if (subCMD != undefined) {
      console.log(akat.ranString(subCMD))
    } else {
      console.log(akat.ranString(10))
    }
  }
} else {
  console.log('bye');
}