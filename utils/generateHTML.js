const fs = require('fs')

function generateHTML(employees){
    for (var i=0;i<employees.length;i++){
        if  (employees[i].getRole()==='Manager'){
            console.log('manager')
        }
        if (employees[i].getRole()==='Engineer'){
            console.log('engineer')
        }
        if (employees[i].getRole()==='Intern'){
            console.log('intern')
        }
    }
}
module.exports = generateHTML