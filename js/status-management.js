const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const util = require('util');

let statusURL = 'https://scalingostatus.com'

// Get div with ID `status-bar` and the classes being `notification` plus:
// - `is-success`: green
// - `is-warning`: orange
// - `is-danger`: red

axios.get(statusURL).then((response) => {
  const dom = new JSDOM(response.data)
  const classes = dom.window.document.querySelector('div#status-bar.notification').
    getAttribute('class').split(' ')
  // status contains a string like "is-success" and we add it as a class of the
  // status-icon element
  const status = classes.find(el => el.substring(0, 3) == 'is-')
  let statusIcon = document.querySelector('.status-icon')
  if (status != null && statusIcon !== null) {
    statusIcon.classList.add(status)
  }
}).catch((error) => {
  console.log("fetch status error: ", error)
})
