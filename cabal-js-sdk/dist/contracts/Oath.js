"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConnection = exports.revokeConnection = exports.createConnection = void 0;
// @ts-nocheck
const index_1 = __importDefault(require("../index"));
function createConnection(service_wallet, data_type_address) {
    index_1.default.OathContract.createConnection(service_wallet, data_type_address);
}
exports.createConnection = createConnection;
function revokeConnection(service_wallet, data_type_address) {
    index_1.default.OathContract.revokeConnection(service_wallet, data_type_address);
}
exports.revokeConnection = revokeConnection;
function checkConnection(service_wallet, data_type_address) {
    index_1.default.OathContract.checkConnection(service_wallet, data_type_address);
}
exports.checkConnection = checkConnection;
