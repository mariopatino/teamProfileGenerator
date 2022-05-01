const teamMembers = [];

function renderSection(item) {
    if (item.role === "Manager") {
        return `<section id="manager" class="team-card">
        <div class="card-header">
            <h2>${item.name}</h2>
            <h3><i class="fas fa-mug-hot"></i><span> ${item.role}</span></h3>
        </div>
        <div class="card-body">
            <ul>
                <li class="employee-id">ID: ${item.id}</li>
                <li class="email">Email: <a href="mailto:${item.email}">${item.email}</a></li>
                <li id="office-number">Office number: ${item.officeNumber}</li>
            </ul>
        </div>
    </section>`
    } if (item.role === "Engineer") {
        return `\n\n<section id="engineer" class="team-card">
        <div class="card-header">
            <h2>${item.name}</h2>
            <h3><i class="fas fa-glasses"></i><span> ${item.role}</span></h3>
        </div>
        <div class="card-body">
            <ul>
                <li class="employee-id">ID: ${item.id}</li>
                <li class="email">Email: <a href="mailto:${item.email}">${item.email}</a></li>
                <li id="github">GitHub: <a href="https://github.com/${item.github}" target="_blank">${item.github}</a></li>
            </ul>
        </div>
    </section>`
    } if (item.role === "Intern") {
        return `\n\n<section id="intern" class="team-card">
        <div class="card-header">
            <h2>${item.name}</h2>
            <h3><i class="fas fa-user-graduate"></i><span> ${item.role}</span></h3>
        </div>
        <div class="card-body">
            <ul>
                <li class="employee-id">ID: ${item.id}</li>
                <li class="email">Email: <a href="mailto:${item.email}">${item.email}</a></li>
                <li id="school">School: ${item.school}</li>
            </ul>
        </div>
    </section>`
    } 
};

function generateHTML() {
const teamSections = teamMembers.map(renderSection);
const htmlSections = teamSections.join(' ');
return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UFT-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <title>Team Profile Generator</title>
    </head>

    <body>

        <header>
            <h1>My Team</h1>       
        </header>

        <main>

        ${htmlSections}
        
        </main>

</body>
</html>`

};

function generateCSS() {
    return `* {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Varela Round', sans-serif;
    }
    
    header {
        background-color: rgb(255, 49, 83);
        color: white;
        text-align: center;
        line-height: 7em;
        width: 100vw;
        height: 7em;
    }
    
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: flex-start;
        gap: 30px;
        padding: 40px 100px;
        width: 100vw;
        height: 80em;
    }
    
    section {
        background-color: rgb(240, 240, 240);
    }
    
    .team-card {
        flex: 0 0 25%;
        height: 17em;
        box-shadow: 5px 5px 8px rgb(133, 132, 132);
    }
    
    .card-header {
        background-color: dodgerblue;
        color: white;
    }
    
    h2, h3 {
        padding: 10px;
    }
    
    .card-body {
        margin: 30px 15px;
        background-color: white;
        border: solid 1px lightgray;
    }
    
    li {
        list-style: none;
        padding: 10px;
        border: solid 1px lightgray;
    }`
}

module.exports = {
    teamMembers, generateHTML, generateCSS
};