import CabalClient from "../index";

export function addData(savedData: string) {
  CabalClient.DataTypeContract._addData(savedData);
}

export function fetch(
  user_wallet: string,
  reason: string,
  data_type_address: string,
  provider_address: string
) {
  CabalClient.DataTypeContract._fetch(
    user_wallet,
    reason,
    data_type_address,
    provider_address
  );
}
