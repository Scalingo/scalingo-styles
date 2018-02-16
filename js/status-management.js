import 'whatwg-fetch'

let statusURL = "https://status.scalingo.com/api/v1/status"

fetch(statusURL).then(r => r.json())
  .then(data => {
    let status = data.data.status
    let statusIcon = document.querySelector('.status-icon')
    if (statusIcon !== null) {
      statusIcon.classList.add(status)
    }
  })
  .catch(e => console.log("fetch status error"))
