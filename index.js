const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const validator = require('email-validator');
const multiValidator = require('validation-master');

const createHTML = require("./src/createHTML");
const cssFile = require("./src/style4html")

//const helper = require("./src/helper.js");

const team = [];

const createManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of your team's Manager?",
                name: "managerName",
            },
            {
                type: "input",
                message: "What is the ID of your team's Manager?",
                name: "managerId",
                validate: (answer) => multiValidator.isNumeric(answer) ? true : "Please enter a valid ID Number"
            },
            {
                type: "input",
                message: "Please enter the email account of your team's Manager's",
                name: "managerEmail",
                validate: (answer) => validator.validate(answer) ? true : "Please enter a valid email address"
            },
            {
                type: "input",
                message: "What is the office's telephone number of the team's Manager?",
                name: "officeNumber",
                validate: (answer) => multiValidator.isNumeric(answer) ? true : "Please enter a valid telephone number"
            },
        ])
    
        .then((answers) => {
            let manager = new Manager(
                answers.managerName, 
                answers.managerId, 
                answers.managerEmail, 
                answers.officeNumber
                );
            console.log(`${answers.managerName} has been added as a manager`);    
            team.push(manager);
            addNewMember();
        });
}; // Close the createManager() function

const addNewMember = () => {
    inquirer
        .prompt(
            {
                type: "list",
                name: "typeOfTeamMember",
                choices: [
                  "Engineer",
                  "Intern",
                  "Team is completed"
                ]
            },
        )
        
        .then((answers) => {
            switch (answers.typeOfTeamMember) {
                case "Engineer":
                  createEngineer();
                  break;
                case "Intern":
                  createIntern();
                  break;
                case "Team is completed":
                  renderHTML("./dist/index.html", team);
                  break;
                default:
                  // default
                  renderHTML("./dist/index.html", team);
                  break;
            }

         //   } if (answers.member_or_finish === "Finish building team") {
         //       fs.writeFile("./dist/index.html", helper.generateHTML(), (err) => 
         //       err ? console.error(err) : console.log("HTML successfully generated")
         //       );
         //       fs.writeFile("./dist/style.css", helper.generateCSS(), (err) => 
         //       err ? console.error(err) : console.log("CSS successfully generated")
         //       );
         //   }
        });
};

const createEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Who is the Engineer?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "What is the Engineer's employee ID?",
                name: "engineerId",
            },
            {
                type: "input",
                message: "What is the Engineer's email address?",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "What is the GitHub username of the Engineer?",
                name: "engineerGitHub",
            },
        ])

        .then((answers) => {
            let engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGitHub);
            team.push(engineer);
            console.log(`Added ${answers.engineerName} as an engineer on your team`);
            addNewMember();
        });

};

const createIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the Intern?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is the Intern's employee ID?",
                name: "internId",
            },
            {
                type: "input",
                message: "What is the Intern's email address?",
                name: "internEmail",
            },
            {
                type: "input",
                message: "What school does/did the intern attend?",
                name: "internSchool",
            },
        ])

        .then((answers) => {
            let intern = new Intern(
                answers.internName, 
                answers.internId, 
                answers.internEmail, 
                answers.internSchool);
            team.push(intern);
            console.log(`Added ${answers.name} as an intern on your team`);
            addNewMember();
        });

};

function renderHTML(outputPath, team) {

    console.log(`We have just added ${team.length} members to your team, the website is now available in the /dist/index.html`);
    fs.writeFileSync(outputPath, createHTML(team), "utf8");
    fs.writeFileSync("./dist/style.css", cssFile(), "utf8");
  }

function init() {
    createManager();
}

init();