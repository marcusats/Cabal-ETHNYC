// SPDX-License-Identifier: Cabal
pragma solidity ^0.8.0;


contract Oath {
    address admin;
    mapping(address => mapping(address => mapping(address => bool))) connections;

    constructor() {
        admin = msg.sender;
    }

    function createConnection(address service_wallet, address data_type_address)
        public
    {
        connections[msg.sender][service_wallet][data_type_address] = true;
    }

    function revokeConnection(address service_wallet, address data_type_address)
        public
    {
        connections[msg.sender][service_wallet][data_type_address] = false;
    }

    function checkConnection(address user_wallet, address data_type_address, address requester_address)
        public
        view
        returns (bool)
    {
        return (connections[user_wallet][requester_address][data_type_address]);
    }

    
}
