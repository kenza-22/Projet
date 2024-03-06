const axios = require('axios');
require('dotenv').config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
  username: username,
  password: password
};
exports.getAllSprints = async (req, res) => {
    try {
      const baseUrl = 'https://' + domain + '.atlassian.net';
  
      // Récupérer tous les projets disponibles
      const projectsConfig = {
        method: 'get',
        url: baseUrl + '/rest/api/2/project',
        headers: { 'Content-Type': 'application/json' },
        auth: auth
      };
  
      const projectsResponse = await axios.request(projectsConfig);
      const projects = projectsResponse.data;
  
      // Récupérer les sprints de tous les projets
      const allSprints = [];
  
      for (const project of projects) {
        // Récupérer tous les tableaux associés à ce projet
        const boardsConfig = {
          method: 'get',
          url: baseUrl + `/rest/agile/1.0/board?projectKeyOrId=${project.key}`,
          headers: { 'Content-Type': 'application/json' },
          auth: auth
        };
  
        const boardsResponse = await axios.request(boardsConfig);
        const boards = boardsResponse.data.values;
  
        // Récupérer les sprints de chaque tableau 
        for (const board of boards) {
          const sprintsConfig = {
            method: 'get',
            url: baseUrl + `/rest/agile/1.0/board/${board.id}/sprint`,
            headers: { 'Content-Type': 'application/json' },
            auth: auth
          };
  
          const sprintsResponse = await axios.request(sprintsConfig);
          const sprints = sprintsResponse.data.values;
  
          // Ajouter le nom du projet à chaque sprint pour savoir chaque sprint appartient à quel projet 
          const sprintsWithProjectId = sprints.map(sprint => ({
            ...sprint,
            projectName: project.name
          }));
  
          allSprints.push(...sprintsWithProjectId);
        }
      }
  
      res.json(allSprints);
      console.log('Sprints récupérés avec succès:', allSprints);
    } catch (error) {
      console.log('Erreur:', error);
      res.status(500).json({ error: error.message });
    }
  }
  