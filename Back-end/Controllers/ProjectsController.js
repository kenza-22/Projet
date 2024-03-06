const axios = require('axios');
require('dotenv').config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
  username: username,
  password: password
};

exports.getProjects= async (req,res)=> {
  try {
    const baseUrl = 'https://' + domain + '.atlassian.net';

    const config = {
      method: 'get',
      url: baseUrl + '/rest/api/2/project/recent',
      headers: { 'Content-Type': 'application/json' },
      auth: auth
    };
    const response = await axios.request(config);
  
    res.json(response.data);

    console.log(response.data);
  } catch (error) {
    console.log('error:', error);
    res.status(500).json({ error: error.message });
  }
}


