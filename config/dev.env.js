var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //API_URL: '"http://carpoolear.192.168.0.8.nip.io"',
  API_URL: '"http://carpoolear.138.197.64.208.nip.io"',
  MAPS_API: '"AIzaSyBlRfNi2qDcy_zwjR53VVOyD-csjYSq4Qo"'
})
