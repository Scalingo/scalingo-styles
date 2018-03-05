import {MDCTemporaryDrawer} from '@material/drawer'

let drawerNode = document.querySelector('.mdc-drawer--temporary')
let drawerOpener = document.querySelector('.drawer-opener')
if (drawerNode !== null && drawerOpener !== null) {
  const drawer = new MDCTemporaryDrawer(drawerNode)
  drawerOpener.addEventListener('click', () => drawer.open = true)
}
