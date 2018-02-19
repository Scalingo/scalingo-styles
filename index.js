require('./js/status-management')
require('./js/drawer')
require('./js/ripple')

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('./svg/', true, /\.svg$/))
