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
    })
}
promptUser();

function addManager (){
    return inquirer.prompt(basicQuestions)
    .then(function(userInput){
        return inquirer.prompt(managerQuestions)
        .then(function(officeNumber){
            console.log(userInput,officeNumber)
        })
    })

}