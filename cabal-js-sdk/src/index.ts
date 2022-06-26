// @ts-nocheck
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import * as oath from "./contracts/Oath";
import * as dataType from "./contracts/DataType";
import * as IPFS from "./helpers/ipfsCall";
import OathAbi from "./abi/Oath.json";
import DataTypeAbi from "./abi/DataType.json";
import DataTypeContractInterface from "./types/DataTypeContractInterface";
import OathContractInterface from "./types/OathContractInterface";

const auth =
  "Basic " +
  Buffer.from(
    "2B5wFKzhQzIlNTgS453z4anLxKK" + ":" + "d6b4055218cf1cb91b9a2bbd0bde5243"
  ).toString("base64");

export default class CabalClient {
  public APP_NAME: string;
  public oath: any;
  public dataType: any;
  public static provider;
  public static chainId;
  public static user;
  public static ipfs;
  public static OathContract;
  public static DataTypeContract;

  constructor() {
    this.oath = oath;
    this.dataType = dataType;
    this.init();
  }

  async init() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    chainId = await provider.getNetwork().chainId;
    user = CabalClient.provider.getSigner();
    DataTypeContract = new ethers.Contract(
      "0x8cF84867ba54bd078F678fb276BB1a103efce7d3",
      DataTypeAbi,
      CabalClient.user
    );
    OathContract = new ethers.Contract(
      "0x19d877482185BA38B3eBB0DCAdf344A8AF4f9799",
      OathAbi,
      CabalClient.user
    );

    ipfs = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: auth,
      },
    });
  }

  async put(data_type_address: string, data: string) {
    //encrypt
    const { cid } = await IPFS.pushData(data);
    await this.dataType.addData(cid);
  }

  async get(
    user_wallet: string,
    reason: string,
    data_type_address: string,
    provider_address: string
  ) {
    const { cid } = await this.dataType.fetch(
      user_wallet,
      reason,
      data_type_address,
      provider_address
    );
    const res = await IPFS.getData(cid);
    //decrypt
  }

  async connect(service_wallet: string, data_type_address: string) {
    this.oath.createConnection(service_wallet, data_type_address);
  }
  async disconnect(service_wallet: string, data_type_address: string) {
    this.oath.revokeConnection(service_wallet, data_type_address);
  }
}
