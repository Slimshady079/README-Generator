const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Descripiton?",
  },
  {
    type: "input",
    name: "installaton",
    message: "installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage?",
  },
  {
    type: "list",
    name: "license",
    message: "License?",
    choices: ["MIT", "ISC", "No License"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests",
  },
  {
    type: "input",
    name: "questions",
    message: "Questions",
  },
];

module.exports = questions;