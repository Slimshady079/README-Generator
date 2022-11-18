const { writeFile } = require("fs");

const renderLicenseBadge = (license) => {
  license != "No License"
    ? `![${license}](https://img.shields.io/badge/License-${license}-blue)`
    : "";
};

function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  github,
  email,
}) {
  let output = `# ${title}
${() => renderLicenseBadge(license)}

#### Table of Content:
#### [Description](#description)
#### [Installation](#installation)
#### [Usage](#usage)
#### [Contributing](#contributing)
#### [Tests](#tests)
#### [Questions/Concerns](#questions)

## Description:
${description}

## Installation:
${installation}

## Usage:
${usage}

## Contributing:
${contributing}

## Tests:
${tests}

## Questions / Concerns:
[github](https://github.com/${github})
[email](mailto:${email})

`;

  writeFile("./README.md", output, (err) => {
    if (err) console.log(err);
    console.log("Created Markdown file...");
  });
}

module.exports = generateMarkdown;
