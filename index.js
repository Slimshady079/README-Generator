const { prompt } = require("inquirer");
const questions = require("./questions");

prompt(questions).then((answers) => {
  console.log(answers.title);
});
