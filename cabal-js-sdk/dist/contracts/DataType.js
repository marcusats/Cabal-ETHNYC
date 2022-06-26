"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = exports.addData = void 0;
const index_1 = require("../index");
function addData(savedData) {
    index_1.CabalClient.DataTypeContract._addData(savedData);
}
exports.addData = addData;
function fetch(user_wallet, reason, data_type_address, provider_address) {
    index_1.CabalClient.DataTypeContract._fetch(user_wallet, reason, data_type_address, provider_address);
}
exports.fetch = fetch;
//# sourceMappingURL=DataType.js.map