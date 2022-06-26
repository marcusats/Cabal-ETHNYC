import { CabalClient } from "../index";

export async function pushData(data) {
  return await CabalClient.ipfs.add(data);
}

export async function getData(cid) {
  let res;
  const b = CabalClient.ipfs.cat(cid);
  for await (const chunk of b) {
    res = new TextDecoder().decode(chunk);
  }
  return res;
}
