"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const ethers_1 = require("ethers");
const ipfs_http_client_1 = require("ipfs-http-client");
const oath = __importStar(require("./contracts/Oath"));
const dataType = __importStar(require("./contracts/DataType"));
const IPFS = __importStar(require("./helpers/ipfsCall"));
const Oath_json_1 = __importDefault(require("./abi/Oath.json"));
const DataType_json_1 = __importDefault(require("./abi/DataType.json"));
const auth = "Basic " +
    Buffer.from("2B5wFKzhQzIlNTgS453z4anLxKK" + ":" + "d6b4055218cf1cb91b9a2bbd0bde5243").toString("base64");
class CabalClient {
    constructor(_provider) {
        this.oath = oath;
        this.dataType = dataType;
        this.provider = _provider;
        this.init(_provider);
    }
    init(_provider) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_provider) {
                this.provider = _provider;
                this.chainId = yield _provider.getNetwork().chainId;
                this.user = CabalClient._provider.getSigner();
                this.DataTypeContract = new ethers_1.ethers.Contract("0x8cF84867ba54bd078F678fb276BB1a103efce7d3", DataType_json_1.default, CabalClient.user);
                this.OathContract = new ethers_1.ethers.Contract("0x19d877482185BA38B3eBB0DCAdf344A8AF4f9799", Oath_json_1.default, CabalClient.user);
                this.ipfs = (0, ipfs_http_client_1.create)({
                    host: "ipfs.infura.io",
                    port: 5001,
                    protocol: "https",
                    headers: {
                        authorization: auth,
                    },
                });
            }
        });
    }
    put(data_type_address, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //encrypt
            const { cid } = yield IPFS.pushData(data);
            yield this.dataType.addData(cid);
        });
    }
    get(user_wallet, reason, data_type_address, provider_address) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cid } = yield this.dataType.fetch(user_wallet, reason, data_type_address, provider_address);
            const res = yield IPFS.getData(cid);
            //decrypt
        });
    }
    connect(service_wallet, data_type_address) {
        return __awaiter(this, void 0, void 0, function* () {
            this.oath.createConnection(service_wallet, data_type_address);
        });
    }
    disconnect(service_wallet, data_type_address) {
        return __awaiter(this, void 0, void 0, function* () {
            this.oath.revokeConnection(service_wallet, data_type_address);
        });
    }
}
exports.default = CabalClient;
