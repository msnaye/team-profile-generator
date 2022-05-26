
const Intern=require("../lib/Intern")



const intern=new Intern("Mo","222","mo.doe@gmail.com","UofM");

describe("Intern values", function(){
    it("returns intern name", function(){
        expect(intern.getName()).toBe("Mo");
    })
    it("returns intern id", function(){
        expect(intern.getId()).toBe("222");
    })
    it("returns intern email", function(){
        expect(intern.getEmail()).toBe("mo.doe@gmail.com");
    })
    it("returns intern school", function(){
        expect(intern.getSchool()).toBe("UofM");
    })
})