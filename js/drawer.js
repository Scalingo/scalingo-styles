import {MDCTopAppBar} from "@material/top-app-bar"
const topAppBarNode = document.getElementById('app-bar')
if (topAppBarNode !== null) {
  const topAppBar = MDCTopAppBar.attachTo(topAppBarNode)
  topAppBar.setScrollTarget(document.getElementById('main-content'))
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open
  })
}
