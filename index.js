
const { prompt } = require("inquirer");
const questions = require("./questions");
const generateMarkdown = require('./utils/generateMarkdown');

prompt(questions).then(generateMarkdown);
