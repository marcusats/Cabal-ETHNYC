"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConnection = exports.revokeConnection = exports.createConnection = void 0;
const index_1 = require("../index");
function createConnection(service_wallet, data_type_address) {
    index_1.CabalClient.OathContract.createConnection(service_wallet, data_type_address);
}
exports.createConnection = createConnection;
function revokeConnection(service_wallet, data_type_address) {
    index_1.CabalClient.OathContract.revokeConnection(service_wallet, data_type_address);
}
exports.revokeConnection = revokeConnection;
function checkConnection(service_wallet, data_type_address) {
    index_1.CabalClient.OathContract.checkConnection(service_wallet, data_type_address);
}
exports.checkConnection = checkConnection;
//# sourceMappingURL=Oath.js.map