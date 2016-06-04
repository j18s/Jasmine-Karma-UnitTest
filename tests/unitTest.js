describe("UnitTests", function () {    
    let g = global;
    it("Sum test", function () {
        expect(g.sum(2,3)).toEqual(5);
    });       
    
     it("Product test", function () {
        expect(g.product(2,3)).toEqual(6);
    });  
});