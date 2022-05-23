const Manager=require('./lib/Manager');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');
const inquirer=require('inquirer');

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
       }
    })
}

function addManager (){
    return inquirer.prompt(basicQuestions)
    .then(function(userInput){
        return inquirer.prompt(managerQuestions)
        .then(function(officeNumber){
            console.log(userInput,officeNumber)
            promptUser()
        })
    })

}
function addEngineer(){
    return inquirer.prompt(basicQuestions)
    .then(function(userInput){
        return inquirer.prompt(engineerQuestions)
        .then(function(github){
            console.log(userInput,github)
            promptUser()
        })
    })
}
function addIntern(){
    return inquirer.prompt(basicQuestions)
    .then(function(userInput){
        return inquirer.prompt(internQuestions)
        .then(function(school){
            console.log(userInput,school)
            promptUser()
        })
    })
}
promptUser();