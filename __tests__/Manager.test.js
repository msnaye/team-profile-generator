
const Manager=require("../lib/Manager");



const manager=new Manager("Blue", "444", "blue.code@gmail.com","605");

describe("Manager values", function(){
    it("returns manager name", function(){
        expect(manager.getName()).toBe("Blue");
    })
    it("returns manager id", function(){
        expect(manager.getId()).toBe("444");
    })
    it("returns manager email", function(){
        expect(manager.getEmail()).toBe("blue.code@gmail.com");
    })
    it("returns manager officeNumber", function(){
        expect(manager.getOfficeNumber()).toBe("605");
    })
})