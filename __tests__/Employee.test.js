

const Employee=require("../lib/Employee");


const employee=new Employee("Mayra", "987", "mnaye.ibarra@gmail.com");

describe("Employees values", function(){
    it("returns employee name", function(){
        expect(employee.getName()).toBe("Mayra");
    })
    it("returns employee id",function(){
        expect(employee.getId()).toBe("987");
    })
    it("returns employee email",function(){
        expect(employee.getEmail()).toBe("mnaye.ibarra@gmail.com");
    })
})