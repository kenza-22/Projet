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
    const totalProjects = response.data.length;
    const result = response.data.map(project => ({
      id: project.id,
      Key: project.key,
      name: project.name,
      self: project.self
    }));

    const responseData = {
        totalProjects: totalProjects,
        projects: result
      };
    
    res.json(responseData);

    console.log(responseData);
  } catch (error) {
    console.log('error:', error);
    res.status(500).json({ error: error.message });
  }
}

exports.getProjectByKey = async (req,res,next)=>{
  const projectKey = req.params.projectKey;
  try{
    const baseUrl = 'https://' + domain + '.atlassian.net';

    const config = {
      method: 'get',
      url: baseUrl + '/rest/api/2/project/' + projectKey,
      headers: { 'Content-Type': 'application/json' },
      auth: auth
    };
    const response = await axios.request(config);
    
    if (response && response.data) {
      const project = response.data;
      const result = {
        id: project.id,
        key: project.key,
        name: project.name,
        self: project.self
      };
      res.json(result);
      console.log(result);
    } else {
      res.status(404).json({ error: "Projet non trouvé" });
    }
  } catch (error){
    console.log('error:', error);
    res.status(500).json({ error: error.message });
  }
}
