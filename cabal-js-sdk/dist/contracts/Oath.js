"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = exports.deleteData = exports.getData = exports.addData = void 0;
const keyTermPairs_json_1 = __importDefault(require("../utils/keyTermPairs.json"));
function addData(key, value) {
    const key_id = searchKeyId(key);
    console.log("key_id", oath);
    console.log("yeah");
}
exports.addData = addData;
function getData(key) {
    console.log("yeah");
}
exports.getData = getData;
function deleteData(key) {
    console.log("yeah");
}
exports.deleteData = deleteData;
function createConnection(key) {
    console.log("yeah");
}
exports.createConnection = createConnection;
function searchKeyId(keyTerm) {
    return keyTermPairs_json_1.default[keyTerm];
}
//# sourceMappingURL=Oath.js.map