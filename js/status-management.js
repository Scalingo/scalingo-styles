const axios = require('axios');
const util = require('util');

const statusURL = 'https://scalingo.com/status'

axios.get(statusURL).then((response) => {
  let statusIcon = document.querySelector('.status-icon')
  if (statusIcon !== null) {
    statusIcon.classList.add(response.data.status)
  }
}).catch((error) => {
  console.log("fetch status error: ", error)
})
