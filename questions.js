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
    name: "installation",
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
    choices: [
      "MIT",
      "Mozilla Public License 2.0",
      "Eclipse Public License 2.0",
      "GNU General Public License v3.0",
      "Creative Commons Zero v1.0 Universal",
      "No License",
    ],
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
    name: "github",
    message: "github?",
  },
  {
    type: "input",
    name: "email",
    message: "email?",
  },
];

module.exports = questions;
