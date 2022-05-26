const fs = require('fs')

let team=[]
function generateHTML(employees){
    for (var i=0;i<employees.length;i++){
        if  (employees[i].getRole()==='Manager'){
            //console.log('manager')
            const manager= addManager(employees[i])
            team.push(manager)
        }
        if (employees[i].getRole()==='Engineer'){
            const engineer= addEngineer(employees[i])
            team.push(engineer)
        }
        if (employees[i].getRole()==='Intern'){
            const intern= addIntern(employees[i])
            team.push(intern)
        }
        
    }
    fs.writeFileSync("./dist/index.html",combine(team)) 
}
function addManager(manager){
    return `
    <div class="card mb-3 col-lg-3 col-md-6 col-sm-12" style="width: 500px;">
    <div class="row g-2 d-flex">
        <div class="col-md-4 col-lg-4 col-sm-4">
            <img src="../src/img/mug.jpg" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-8 col-lg-8 col-sm-8 ">
            <div class="card-body w-100">
                <div class="bg-danger">

                    <h5 class="card-title">${manager.name}</h5>
                    <h5 class="card-sub-title">Manager</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.id}</li>
                    <li class="list-group-item">${manager.email}</li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `
}
function addEngineer(engineer){
return`
<div class="card mb-3 col-lg-3 col-md-6 col-sm-12 " style="width: 500px;">
<div class="row g-2 d-flex">
    <div class="col-md-4 col-lg-4 col-sm-4">
        <img src="../src/img/wheels.jpg" class="img-fluid rounded-start" />
    </div>
    <div class="col-md-8 col-lg-8 col-sm-8 ">
        <div class="card-body w-100">
            <div class="bg-warning">

                <h5 class="card-title bg-warning">${engineer.name}</h5>
                <h5 class="card-sub-title bg-warning">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineer.id}</li>
                <li class="list-group-item">${engineer.email}</li>
                <li class="list-group-item">${engineer.github}</li>
            </ul>
        </div>
    </div>
</div>
</div>
`
}
function addIntern(intern){
    return `
    <div class="card mb-3 col-lg-3 col-md-6 col-sm-12" style="width: 500px;">
    <div class="row g-2 d-flex">
        <div class="col-md-4 col-lg-4 col-sm-4">
            <img src="../src/img/intern.jpg" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-8 col-lg-8 col-sm-8 ">
            <div class="card-body w-100">
                <div class="bg-success">

                    <h5 class="card-title">${intern.name}</h5>
                    <h5 class="card-sub-title ">Manager</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.id}</li>
                    <li class="list-group-item">${intern.email}</li>
                    <li class="list-group-item">${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `
}

function combine(team){
    return`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Document</title>
</head>

<body class="bg-dark">
<div class="row">
        <div class="col-lg-12">
            <div class="card" style="width: 45 rem;">
                <div class="card-body text-center card-header bg-danger p-5 ">
                    <h5 class="card-title">My Team</h5>
                    <p class="card-text">

                </div>
            </div>

        </div>
    </div>
<div class="row d-flex justify-content-evenly">
${team}
</div>
</body>
</html>
    `
}



module.exports = generateHTML