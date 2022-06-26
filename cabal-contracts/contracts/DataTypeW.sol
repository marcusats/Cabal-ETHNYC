// SPDX-License-Identifier: Cabal
pragma solidity ^0.8.0;

import "./DataType";
import "./Oath.sol";

contract DataTypeW is DataType {
    address public owner;
    Oath public oathInstance;

    constructor( address oath_address) DataType("WorldCoin") {
        owner = msg.sender;
        oathInstance = Oath(oath_address);
    }
    
    function addData(string memory savedData) {

        _addData(savedData);
    }

    function fetch(address user_wallet, string memory reason){
        _fetch(user_wallet, reason, oathInstance)
    }

}
