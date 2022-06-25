import { ethers } from "ethers";
import * as oath from "./contracts/Oath";
import * as connection from "./contracts/Connection";

export class CabalClient {
  public APP_NAME: string;
  public oath: any;
  public connection: any;
  //@ts-ignore
  public static provider = new ethers.providers.Web3Provider(window.ethereum);
  public static user = CabalClient.provider.getSigner();

  constructor() {
    this.oath = oath;
    this.connection = connection;
  }
}

const a = new CabalClient();
console.log(a.oath.addData("email", "kyritzb@gmail.com"));
