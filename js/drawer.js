import {MDCTopAppBar} from "@material/top-app-bar"
import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))
const topAppBarNode = document.querySelector('.scalingo-toolbar--custom')
if (topAppBarNode !== null) {
  const topAppBar = MDCTopAppBar.attachTo(topAppBarNode)
  topAppBar.setScrollTarget(document.getElementById('main-content'))
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open
  })
}
