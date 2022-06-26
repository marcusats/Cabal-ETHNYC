// SPDX-License-Identifier: Cabal
pragma solidity ^0.8.0;

import "./DataType.sol";
import "./Oath.sol";
import "hardhat/console.sol";

contract DataTypeW is DataType {
    address public owner;
    address public oath_address;

    constructor(address _oath_address) DataType("WorldCoin", _oath_address) {
        owner = msg.sender;
        oath_address = _oath_address;
    }
<<<<<<< HEAD
=======

    function addData(string memory savedData) {
>>>>>>> 1ac3d8a4bcb0ed498dc887786a5cca4faec11581

    function addData(string memory savedData) public {
        _addData(savedData);
    }

    function fetch(address user_wallet, string memory reason)
        public
        returns (string memory)
    {
        string memory a = _fetch(user_wallet, reason, address(this));
        console.log("adam", a);
        return a;
    }
<<<<<<< HEAD
}
=======
>>>>>>> 1ac3d8a4bcb0ed498dc887786a5cca4faec11581
