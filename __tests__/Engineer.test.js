

const Engineer =require("../lib/Engineer");



const engineer=new Engineer("Rose", 1111, "rose.sky@gmail.com", "gitrose");

describe("Engineer values", function(){
    it("returns engineer name", function(){
        expect(engineer.getName()).toBe("Rose");
    })
    it ("returns engineer id", function(){
        expect(engineer.getId()).toBe(1111);
    })
    it ("returns engineer email", function(){
        expect(engineer.getEmail()).toBe("rose.sky@gmail.com");
    })
    it ("returns engineer github", function(){
        expect(engineer.getGithub()).toBe("gitrose");
    })
        
})