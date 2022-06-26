"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = exports.addData = void 0;
const index_1 = __importDefault(require("../index"));
function addData(savedData) {
    index_1.default.DataTypeContract._addData(savedData);
}
exports.addData = addData;
function fetch(user_wallet, reason, data_type_address, provider_address) {
    index_1.default.DataTypeContract._fetch(user_wallet, reason, data_type_address, provider_address);
}
exports.fetch = fetch;
