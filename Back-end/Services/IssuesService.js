const axios = require('axios');

exports.getIssues = async (username, password, domain) => {
  try {
    const baseUrl = 'https://' + domain + '.atlassian.net';

    const auth = {
      username: username,
      password: password
    };

    const config = {
      method: 'get',
      url: baseUrl + '/rest/api/2/search',
      headers: { 'Content-Type': 'application/json' },
      auth: auth
    };

    const response = await axios.request(config);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


