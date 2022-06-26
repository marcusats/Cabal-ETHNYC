import { create} from "ipfs-http-client";



const auth =
'Basic '  + Buffer.from(process.env.PROJECT_ID + ':' + process.env.PROJECT_SECRET).toString('base64');

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});


export default function ManageData() {

    function pushData(data) {
       return (client.add(data))
    }

    function getData(cid) {
        let res;
        const b = ipfs.cat(cid);
        for await (const chunk of b) {
         res = new TextDecoder().decode(chunk);
        }
        return res
    }
}