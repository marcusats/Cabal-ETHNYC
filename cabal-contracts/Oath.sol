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

    function checkConnection(address user_wallet, address data_type_address)
        public
        returns (bool)
    {
        return (connections[user_wallet][msg.sender][data_type_address]);
    }
}

contract DataType {
    address public owner;
    string public name;
    Oath public oathInstance;

    struct Request {
        uint256 count;
        mapping(uint256 => string) reasons; //reasons why app asked for this data
    }

    struct Data {
        mapping(address => Request) services;
        string savedData; //the location the data is saved
    }

    mapping(address => Data) users;

    constructor(string memory _name, address oath_address) {
        name = _name;
        owner = msg.sender;
        oathInstance = Oath(oath_address);
    }

    function addData(string memory savedData) public {
        users[msg.sender].savedData = savedData;
    }

    function fetch(address user_wallet, string memory reason)
        public
        returns (string memory)
    {
        require(
            oathInstance.checkConnection(user_wallet, address(this)) == false,
            "No connection found"
        );
        Request storage request = users[user_wallet].services[msg.sender];
        if (msg.sender != user_wallet) {
            request.count++;
            request.reasons[request.count] = reason;
        }
        return (users[user_wallet].savedData);
    }
}
