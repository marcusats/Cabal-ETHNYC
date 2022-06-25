pragma solidity ^0.8.0;

contract Oath {
    address admin;
    //      field     ---->  field id
    mapping(string => uint8) field_id;
    //      address   --->  field id       ----->          CID
    mapping(address => mapping(uint8 => string)) data_types;
    //  user address -->  service address ------>Connection
    mapping(address => mapping(address => address)) connections;
    // service address --> name
    mapping(address => string) services;

    constructor() {
        admin = msg.sender;
    }

    //user adds data values
    //gets a key [1]
    //gets a CID [encrypted email]
    function addData(uint8 fieldId, string memory value) public {
        data_types[msg.sender][fieldId] = value;
    }

    function getData(uint8 fieldId) public view returns (string memory cid) {
        return (data_types[msg.sender][fieldId]);
    }

    function deleteData(uint8 fieldId) public {
        delete data_types[msg.sender][fieldId];
    }

    function createConnection(
        string memory app_name,
        address app_admin,
        uint8 fieldId
    ) public returns (address connection_address) {
        address new_connection = address(
            new Connection(
                msg.sender,
                address(this),
                app_name,
                app_admin,
                fieldId
            )
        );
        connections[msg.sender][app_admin] = new_connection;
        return (new_connection);
    }

    function revoke(address app_admin) public payable {
        address connection_contract_address = connections[msg.sender][
            app_admin
        ];
        Connection connection_contract = Connection(
            connection_contract_address
        );
        connection_contract.revoke(payable(address(this)));
        delete connections[msg.sender][app_admin];
    }

    function fetch(address owner_wallet, uint8 fieldId) public {
        address connection_contract_address = connections[owner_wallet][
            msg.sender
        ];
        Connection connection_contract = Connection(
            connection_contract_address
        );
        connection_contract.fetch(owner_wallet, fieldId);
    }
}

contract Connection {
    int256 public count; //the times the connection was called
    address public parent_address;
    Oath public parent; //the parent contract
    address public owner; //owner of the data
    address public app_admin; //the wallet accessing the data
    string private user_secret; //signed message of 2 random numbers
    string private app_secret; //signed message of 2 random numbers
    uint8 public fieldId;

    constructor(
        address _owner,
        address _parent_address,
        string memory app_name,
        address _app_admin,
        uint8 _fieldId
    ) {
        owner = _owner;
        parent = Oath(_parent_address);
        parent_address = _parent_address;
        app_name = app_name;
        app_admin = _app_admin;
        fieldId = _fieldId;
        count = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner); // If it is incorrect here, it reverts.
        _; // Otherwise, it continues.
    }

    modifier onlyParent() {
        require(msg.sender == parent_address); // If it is incorrect here, it reverts.
        _; // Otherwise, it continues.
    }

    modifier onlyAppAdmin() {
        require(msg.sender == app_admin); // If it is incorrect here, it reverts.
        _; // Otherwise, it continues.
    }

    function revoke(address payable _to) public onlyParent {
        selfdestruct(_to);
    }

    function fetch(address owner_wallet, uint8 fieldId) public onlyAppAdmin {
        count++;
    }
}
