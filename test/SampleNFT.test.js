const SampleNFT = artifacts.require("SampleNFT.sol");

contract("Testing ERC721(NFT) contract", function(accounts) {
    it("Is the contract deployed?", async () => {
        const nft = await SampleNFT.new();
        assert(nft, "contract was not deployed");
    })
})
