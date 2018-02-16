import {MDCTemporaryDrawer} from '@material/drawer'

let drawerNode = document.querySelector('.mdc-drawer--temporary')
if (drawerNode !== null) {
  const drawer = new MDCTemporaryDrawer(drawerNode)
  document.querySelector('.drawer-opener').addEventListener('click', () => drawer.open = true)
}
