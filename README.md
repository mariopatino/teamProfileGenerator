# Team Profile Generator


This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so it also includes unit test for every part of the code and it passes each test.

## Usage
You can wathc the application working in the following video [Walkthrough Video]
https://drive.google.com/file/d/1FH5sL6kcdPR3gq18FECCVxpvqSD8sH9W/view

You can also render the HTML created after you enter the requested data at  [index.html](./dist/index.html)

## Structure

This is the directory structure:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```


The application includes `Employee`, `Manager`, `Engineer`, and `Intern` classes for testing. 


### Technical 


  * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

  * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

  * The application has `Employee`, `Manager`, `Engineer`, and `Intern` classes.


