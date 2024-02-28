import { http, createPublicClient, custom, webSocket, Transaction } from "viem";
import { holesky } from "viem/chains";
import { rsHolesky } from "./utils/getRedstoneHolesky";
//import { appendData } from "./utils/postDataGCloud";
import { castToschema } from "./utils/castToType";
import { txType } from "./txType";
import { appendToMongo } from "./utils/postDataToMongo";

//Public client with http transport
const client = createPublicClient({
  chain: rsHolesky,
  transport: http(),
});

// To get transactions from new block and post them to db
client.watchBlocks({
  onBlock: async (block) => {
    let data: Transaction[] = [];
    console.log("fetching data");
    for (let hash of block.transactions) {
      const [transaction] = await Promise.all([
        client.getTransaction({ hash }),
      ]);
      data.push(transaction);
    }
    console.log("fetched data and appending to cloud now...");
    //await appendData(data);
    await appendToMongo(data);
  },
});
