import { CabalClient } from "../index";

export function createConnection(
  service_wallet: string,
  data_type_address: string
) {
  CabalClient.OathContract.createConnection(service_wallet, data_type_address);
}

export function revokeConnection(
  service_wallet: string,
  data_type_address: string
) {
  CabalClient.OathContract.revokeConnection(service_wallet, data_type_address);
}

export function checkConnection(
  service_wallet: string,
  data_type_address: string
) {
  CabalClient.OathContract.checkConnection(service_wallet, data_type_address);
}
