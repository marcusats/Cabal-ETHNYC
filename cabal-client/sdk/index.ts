// @ts-nocheck
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import DataTypeAbi from "./abi/DataType.json";
import OathAbi from "./abi/Oath.json";

const projectId = "2B6ylMQjTJmsyoz41BEipfbHcua";
const projectSecret = "1b64da7aa23e8036970ba1de50c98859";
const oath = "0xcE926B6903b1095692DCE49BDe324874B389D83E";
const datatype = "0x0449A64Ab88177a0b92f9f7f701c6335ac12b822";

const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

export default class CabalClient {
  public oath: any;
  public dataType: any;
  public provider;
  public chainId;
  public user;
  public ipfs;
  public OathContract;
  public DataTypeContract;

  constructor(_provider) {
    this.provider = _provider;
    this.init(_provider);
  }

  async init(_provider) {
    if (_provider) {
      this.provider = _provider;
      this.chainId = await _provider.getNetwork().chainId;
      this.user = await _provider.getSigner();
      this.OathContract = await new ethers.Contract(oath, OathAbi, this.user);

      this.DataTypeContract = await new ethers.Contract(
        datatype,
        DataTypeAbi,
        this.user
      );

      this.ipfs = await create({
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https",
        headers: {
          authorization: auth,
        },
      });
    }
  }

  async put(data_type_address: string, data: string) {
    await this.DataTypeContract.addData(data);
  }

  async get(user_wallet: string) {
    console.log("h");
    console.log(this.DataTypeContract);
    console.log("wallet: ", user_wallet);
    const res = await this.DataTypeContract.fetch(user_wallet, "Reason", oath);
    console.log("meep");
    console.log({ res });

    return 1;
  }

  async pushDataIPFS(data: string) {
    return await this.ipfs?.add(data);
  }

  async getDataIPFS(cid: string) {
    let res;
    const b = this.ipfs.cat(cid);
    for await (const chunk of b) {
      res = new TextDecoder().decode(chunk);
    }
    return res;
  }

  async createConnection(service_wallet: string, data_type_address: string) {
    await OathContract.createConnection(service_wallet, data_type_address);
  }

  async revokeConnection(service_wallet: string, data_type_address: string) {
    OathContract.revokeConnection(service_wallet, data_type_address);
  }
  async checkConnection(service_wallet: string, data_type_address: string) {
    OathContract.checkConnection(service_wallet, data_type_address);
  }
  async connect(service_wallet: string, data_type_address: string) {
    this.createConnection(service_wallet, data_type_address);
  }
  async disconnect(service_wallet: string, data_type_address: string) {
    this.revokeConnection(service_wallet, data_type_address);
  }
}
