"use strict";

import { BigQuery } from "@google-cloud/bigquery";
import { txType } from "../txType";
import { castToschema } from "./castToType";
import { Transaction } from "viem";
import dotenv from "dotenv";
dotenv.config();
//This should also work with billing account and prepayment, not supported in free tier

export const appendData = async (data: Transaction[]) => {
  /// confg options with schema
  const options = {
    sourceFormat: "NEWLINE_DELIMITED_JSON",
    schema: {
      fields: [
        { name: "hash", type: "STRING" },
        { name: "nonce", type: "STRING" },
        { name: "transaction_index", type: "INTEGER" },
        { name: "from_address", type: "STRING" },
        { name: "to_address", type: "STRING", mode: "NULLABLE" },
        { name: "value", type: "FLOAT", mode: "NULLABLE" },
        { name: "gas", type: "STRING", mode: "NULLABLE" },
        { name: "gasprice", type: "STRING", mode: "NULLABLE" },
        { name: "input", type: "STRING", mode: "NULLABLE" },
        {
          name: "receipt_cumulative_gas_used",
          type: "STRING",
          mode: "NULLABLE",
        },
        { name: "receipt_gas_used", type: "STRING", mode: "NULLABLE" },
        { name: "receipt_contract_address", type: "STRING", mode: "NULLABLE" },
        { name: "receipt_root", type: "STRING", mode: "NULLABLE" },
        { name: "receipt_status", type: "STRING", mode: "NULLABLE" },
        { name: "block_timestamp", type: "TIMESTAMP" },
        { name: "block_number", type: "STRING" },
        { name: "block_hash", type: "STRING" },
        { name: "max_fee_per_gas", type: "STRING", mode: "NULLABLE" },
        { name: "max_priority_fee_per_gas", type: "STRING", mode: "NULLABLE" },
        { name: "transaction_type", type: "STRING", mode: "NULLABLE" },
        {
          name: "receipt_effective_gas_price",
          type: "STRING",
          mode: "NULLABLE",
        },
      ],
    },
    location: "US",
  };
  /// getting table
  const projectId = process.env.PROJECT_ID;
  const datasetId = process.env.DATASET_ID || "";
  const tableId = process.env.TABLE_ID || "";
  const bigquery = new BigQuery({ projectId });

  try {
    /// sequentialy putting data in table one by one
    for (const tx of data) {
      const [apiResponse] = await bigquery
        .dataset(datasetId)
        .table(tableId)
        .insert(castToschema(tx), options);
      console.log(apiResponse);
    }
  } catch (err: any) {
    console.log("Some error occurred while inserting:", err);
  }
};
