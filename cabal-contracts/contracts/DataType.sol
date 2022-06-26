// SPDX-License-Identifier: Cabal
pragma solidity ^0.8.0;

import "./Oath.sol";
import "hardhat/console.sol";

contract DataType {
    string public name;
    Oath public oath_instance;

    struct Request {
        uint256 count;
        mapping(uint256 => string) reasons; //reasons why app asked for this data
    }

    struct Data {
        mapping(address => Request) services;
        string savedData; //the location the data is saved
    }

    mapping(address => Data) users;

    constructor(string memory _name, address _oath_address) {
        name = _name;
        oath_instance = Oath(_oath_address);
        oath_instance.ping();
    }

    function _addData(string memory savedData) public {
        users[msg.sender].savedData = savedData;
    }

    function _fetch(
        address user_wallet,
        string memory reason,
        address data_type_address
    ) public returns (string memory) {
        if (msg.sender == user_wallet) {
            console.log("is user");
            console.log(users[user_wallet].savedData);
            return (users[user_wallet].savedData);
        } else {
            console.log("user_wallet:", user_wallet);
            console.log("data_type_address:", data_type_address);
            console.log(
                "res:",
                oath_instance.checkConnection(user_wallet, data_type_address)
            );
            require(
                oath_instance.checkConnection(user_wallet, data_type_address),
                "No connection found"
            );
            console.log("fetching");
            console.log("before req");
            Request storage request = users[user_wallet].services[msg.sender];
            console.log("after req");
            if (msg.sender != user_wallet) {
                request.count++;
                request.reasons[request.count] = reason;
            }
            console.log("Done fetch");
            return (users[user_wallet].savedData);
        }
    }
}
