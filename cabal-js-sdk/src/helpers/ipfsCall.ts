// @ts-nocheck
import CabalClient from "../index";

export async function pushData(data: string) {
  return await CabalClient.ipfs.add(data);
}

export async function getData(cid: string) {
  let res;
  const b = CabalClient.ipfs.cat(cid);
  for await (const chunk of b) {
    res = new TextDecoder().decode(chunk);
  }
  return res;
}
