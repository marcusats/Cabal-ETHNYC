const Oath = artifacts.require("../contracts/Oath.sol");
const DataTypeW = artifacts.require("../contracts/DataTypeW.sol");

module.exports = function (deployer) {
<<<<<<< HEAD
	deployer.deploy(Oath);
=======
	deployer.deploy(Oath).then(function () {
		return deployer.deploy(DataTypeW, Oath.address);
	});
>>>>>>> 5f46ef5acc170675de508c3b524c7995930a3ebd
};
