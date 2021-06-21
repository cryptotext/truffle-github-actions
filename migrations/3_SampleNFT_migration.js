const SampleNFT = artifacts.require("SampleNFT.sol");

module.exports = function (deployer) {
  deployer.deploy(SampleNFT);
};
