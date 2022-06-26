// SPDX-License-Identifier: Cabal
pragma solidity ^0.8.0;

import "./DataType.sol";
import "./Oath.sol";

contract DataTypeW is DataType {
    address public owner;
    address public oath_address;

    constructor(address _oath_address) DataType("WorldCoin", _oath_address) {
        owner = msg.sender;
        oath_address = _oath_address;
    }

<<<<<<< HEAD
    function addData(string memory savedData) public  {
=======
>>>>>>> 2d5029c9c25590fbdd169b1f9fc299e0a4df6541

    function addData(string memory savedData) public {
        _addData(savedData);
    }

<<<<<<< HEAD
    function fetch(address user_wallet, string memory reason) public {
        _fetch(user_wallet, reason, oathInstance);
    }

=======
    function fetch(address user_wallet, string memory reason)
        public
        returns (string memory)
    {
        string memory a = _fetch(user_wallet, reason, address(this));
        return a;
    }
>>>>>>> 2d5029c9c25590fbdd169b1f9fc299e0a4df6541
}