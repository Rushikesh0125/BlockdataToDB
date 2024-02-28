import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { txType } from "../txType";
import { Transaction } from "viem";
import { castToschema } from "./castToType";
dotenv.config();

const uri = process.env.MONGO_URI || "";
const db = process.env.DB_NAME || "";
const collection = process.env.COLLECTION || "";
const client = new MongoClient(uri);
/// posting data to mongo collection
export const appendToMongo = async (data: Transaction[]) => {
  const serialized: txType[] = [];
  for (const tx of data) {
    serialized.push(await castToschema(tx));
  }
  try {
    await client.connect();
    const dbInst = client.db(db);
    const collectionInst = dbInst.collection(collection);
    await collectionInst.insertMany(serialized);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
