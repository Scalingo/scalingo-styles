import {MDCRipple} from '@material/ripple'

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mdc-button, a.mdc-fab').forEach((elem) => {
    new MDCRipple(elem)
  })
})
