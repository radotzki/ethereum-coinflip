var FlipCoin = artifacts.require("./FlipCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(FlipCoin);
};
