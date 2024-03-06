const axios = require('axios');
require('dotenv').config();
const fs = require('fs');

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
  
    
    const jsonData = response.data;
      const jsonString = JSON.stringify(jsonData, null, 2);
      fs.writeFile('projects.json', jsonString, 'utf8', (err) => {
        if (err) {
          console.error('Erreur lors de l\'écriture du fichier :', err);
          return;
        }
        console.log('Les données ont été écrites dans le fichier projects.json');
        res.json(response.data);
      });
  } catch (error) {
    console.log('error:', error);
    res.status(500).json({ error: error.message });
  }
}


