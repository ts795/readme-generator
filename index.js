const inquirer = require('inquirer');
const fs = require('fs');

// Ask user questions about the README content
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation_instructions',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage_information',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contribution_guidelines',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test_instructions',
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: 'license',
      choices: ["MIT License", "GNU GPL v3"]
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github_username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((response) => {
    let fileContents = `# ${response.title}\n\n`;
    fileContents += `## Description\n\n${response.description}\n\n`;
    fileContents += `## Table of Contents\n\n`;
    fileContents += "* [Installation](#installation)\n";
    fileContents += "* [Usage](#usage)\n";
    fileContents += "* [License](#license)\n";
    fileContents += "* [Contributing](#contributing)\n";
    fileContents += "* [Tests](#tests)\n";
    fileContents += "* [Questions](#questions)\n";
    fileContents += `## Installation\n${response.installation_instructions}\n\n`;
    fileContents += `## Usage\n\n${response.usage_information}\n\n`;
    fileContents += `## License\n\n`;
    fileContents += `## Contributing\n\n${response.contribution_guidelines}\n\n`;
    fileContents += `## Tests\n\n${response.test_instructions}\n\n`;
    fileContents += `## Questions\n\n`;
    fs.writeFile("README.md", fileContents, (err) =>
        err ? console.error(err) : console.log('Success!')
);
  }
  );
