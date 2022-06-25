import { ethers } from "ethers";
import keyTermPairs from "../utils/keyTermPairs.json";
import { CabalClient } from "../index";

export function getData(keyTerm: string): number {
  return keyTermPairs[keyTerm];
}

export function revoke() {
  console.log("error");
}
