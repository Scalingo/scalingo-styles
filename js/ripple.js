import {MDCRipple} from '@material/ripple'

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mdc-button').forEach((elem) => {
    new MDCRipple(elem)
  })
})
