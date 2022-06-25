import { ethers } from "ethers";
import Oath from "../abi/Oath.json";
import keyTermPairs from "../utils/keyTermPairs.json";
import { CabalClient } from "../index";

const contract = new ethers.Contract(
  "0x6a7B4281746471648519A9851A94Fc7173f903e4",
  Oath,
  CabalClient.user
);

export function addData(key: string, value: string) {
  const key_id = searchKeyId(key);
  contract.addData(key_id, value);
  console.log("key_id", key_id);
  console.log("yeah");
}
export function getData(key: string) {
  const key_id = searchKeyId(key);
  console.log("yeah");
}
export function deleteData(key: string) {
  const key_id = searchKeyId(key);
  console.log("yeah");
}
export function createConnection(
  app_name: string,
  app_address: string,
  key: string
) {
  const key_id = searchKeyId(key);

  console.log("yeah");
}

export function fetch(owner_address: string, key: string) {
  const key_id = searchKeyId(key);

  console.log("yeah");
}

function searchKeyId(keyTerm: string): number {
  return keyTermPairs[keyTerm];
}
