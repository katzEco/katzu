let tydon = require('tydon')
let rand = require('ran-string')

exports.tyDon = function (inp) {
  let epoch

  if (inp != undefined) {
    epoch = tydon.tyDon(inp)
  } else {
    epoch = tydon.tyDon()
  }

  return epoch
}

exports.ranString = function (inp) {
  let dString

  if (inp != undefined) {
    dString = rand.rand(inp)
  } else {
    dString = rand.rand(10)
  }

  return dString
}