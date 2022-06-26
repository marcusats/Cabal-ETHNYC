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


    function addData(string memory savedData) public {
        _addData(savedData);
    }

    function fetch(address user_wallet, string memory reason, address provider_address)
        public
        returns (string memory)
    {
        string memory a = _fetch(user_wallet, reason, address(this),provider_address);
        return a;
    }
}