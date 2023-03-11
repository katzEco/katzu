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

let tyDon = require('tydon')
let rand = require('ran-string')

if (cmd != undefined) {
  if (cmd == 'tydon') {
    if (subCMD != undefined) {
      console.log(tyDon.tyDon(subCMD));
    } else {
      console.log(tyDon.tyDon())
    }
  } else if (cmd == 'ranString') {
    if (subCMD != undefined) {
      console.log(rand.rand(subCMD))
    } else {
      console.log(rand.rand(10))
    }
  }
} else {
  console.log('bye');
}