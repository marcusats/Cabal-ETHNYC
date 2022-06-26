"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.pushData = void 0;
const index_1 = __importDefault(require("../index"));
function pushData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield index_1.default.ipfs.add(data);
    });
}
exports.pushData = pushData;
function getData(cid) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        let res;
        const b = index_1.default.ipfs.cat(cid);
        try {
            for (var b_1 = __asyncValues(b), b_1_1; b_1_1 = yield b_1.next(), !b_1_1.done;) {
                const chunk = b_1_1.value;
                res = new TextDecoder().decode(chunk);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (b_1_1 && !b_1_1.done && (_a = b_1.return)) yield _a.call(b_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    });
}
exports.getData = getData;
