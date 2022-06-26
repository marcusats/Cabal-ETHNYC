const Oath = artifacts.require("../contracts/Oath.sol");
const DataTypeW = artifacts.require("../contracts/DataTypeW.sol");

module.exports = function (deployer) {
	deployer.deploy(Oath).then(() => {
		deployer.deploy(DataTypeW, Oath.address);
	});
};
