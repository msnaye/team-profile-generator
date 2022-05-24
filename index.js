const Manager=require('./lib/Manager');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');
const inquirer=require('inquirer');
const Employee = require('./lib/Employee');
const generateHTML=require('./utils/generateHTML')
let Employees=[]




const basicQuestions=[
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID'          
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email'
    }
]
const managerQuestions=[
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number'
    }
]
const engineerQuestions=[
    {
        type: 'input',
        name: 'github',
        message: 'Enter Github username'
    }
]
const internQuestions=[
    {
        type:'input',
        name:'school',
        message: 'Enter school name'
    }
]

function promptUser(){
    return inquirer.prompt([
     {
         type: 'list',
         name: 'jobTitle',
         message: 'What would you like to add?',
         choices: ['Manager','Engineer', 'Intern','Exit']    
        }   
    ])
    .then(function(choice){
       if(choice.jobTitle==='Manager'){
           addManager()
           
       }
       else if (choice.jobTitle==='Engineer'){
           addEngineer()
           
       }
       else if (choice.jobTitle==='Intern'){
        addIntern()
        
       }
       else {
           console.log('Thank you!')
           generateHTML(Employees)
       }
    })
}

function addManager (){
    return inquirer.prompt(basicQuestions)
    .then(function(userInput){
        return inquirer.prompt(managerQuestions)
        .then(function(officeNumber){
            const manager = new Manager(userInput.name, userInput.id, userInput.email, officeNumber.officeNumber);
            Employees.push(manager)
            //console.log(Employees)
            promptUser()
        })
    })

}
function addEngineer(){
    return inquirer.prompt(basicQuestions)
    .then(function(userInput){
        return inquirer.prompt(engineerQuestions)
        .then(function(github){
            const engineer =new Engineer(userInput.name, userInput.id, userInput.email, github.github);
            Employees.push(engineer)
            //console.log(Employees)
            promptUser()
        })
    })
}
function addIntern(){
    return inquirer.prompt(basicQuestions)
    .then(function(userInput){
        return inquirer.prompt(internQuestions)
        .then(function(school){
            const intern =new Intern(userInput.name, userInput.id, userInput.email, school.school);
            Employees.push(intern)
            //console.log(Employees)
            promptUser()
        })
    })
}
promptUser();