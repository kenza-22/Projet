const issuesService = require('../Services/IssuesService');
const fs = require('fs');
require('dotenv').config();

exports.getIssues = async (req, res) => {
  try {
    const { ATLASSIAN_USERNAME, ATLASSIAN_API_KEY, DOMAIN } = process.env;
    const issues = await issuesService.getIssues(ATLASSIAN_USERNAME, ATLASSIAN_API_KEY, DOMAIN);

    const jsonString = JSON.stringify(issues, null, 2);
    fs.writeFile('issues.json', jsonString, 'utf8', (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture du fichier :', err);
        return res.status(500).json({ error: 'Erreur lors de l\'écriture du fichier' });
      }
      console.log('Les données ont été écrites dans le fichier issues.json');
      res.json(issues);
    });
  } catch (error) {
    console.log('error: ', error)
    res.status(500).json({ error: error.message });
  }
};
