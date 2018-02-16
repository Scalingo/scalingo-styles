require('./js/status-management')
require('./js/drawer')
require('./js/ripple')

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('./svg/icons/', false, /\.svg$/))
importAll(require.context('./svg/brands/', false, /\.svg$/))
importAll(require.context('./svg/logos/', false, /\.svg$/))
importAll(require.context('./svg/technologies/', true, /\.svg$/))
