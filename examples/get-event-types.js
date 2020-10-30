require('dotenv').config();
const axios = require('axios');
const event_url = 'https://amplitude.com/api/2/taxonomy/event';
axios({
  url: event_url,
  auth: {
    username: process.env.AMPLITUDE_PROJECT_KEY,
    password: process.env.AMPLITUDE_PROJECT_SECRET,
  },
}).then(res => {
  const {data, success} = res.data;
  if (success) {
    data.forEach(event => {
      console.log(event.event_type);
    });
  }
});
