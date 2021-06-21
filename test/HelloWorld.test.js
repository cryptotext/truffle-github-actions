const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld contract", function(accounts) {
    it("Is the contract deployed?", async () => {
        const helloworld = await HelloWorld.new();
        assert(helloworld, "contract was not deployed");
    })
})
