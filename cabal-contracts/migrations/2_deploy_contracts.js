const Oath = artifacts.require("../contracts/Oath.sol");
//const DataTypeW = artifacts.require("../contracts/DataTypeW.sol");

module.exports = function (deployer) {
	deployer.deploy(Oath).then(function () {
		return deployer.deploy(DataTypeW, Factory.address);
	});
};
