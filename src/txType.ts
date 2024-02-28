import { TransactionType } from "viem";
/// type for transaction schema
export type txType = {
  hash: string;
  nonce: number;
  transaction_index: number;
  from_address: string;
  to_address?: string | null;
  value?: number | null;
  gas?: number | null;
  gasprice?: number | null;
  input?: string | null;
  receipt_cumulative_gas_used?: number | null;
  receipt_gas_used?: number | null;
  receipt_contract_address?: string | null;
  receipt_root?: string | null;
  receipt_status?: number | null;
  block_timestamp: Date;
  block_number: number;
  block_hash: string;
  max_fee_per_gas?: number | null;
  max_priority_fee_per_gas?: number | null;
  transaction_type?: TransactionType | null;
  receipt_effective_gas_price?: number | null;
};
//Sample from getTransaction
// {
//     "blockHash": "0x5ca11ea78ea0510b166715333aeaa25ddeff91d7d90feca09edafaa8bae2a182",
//     "blockNumber": "1028346",
//     "from": "0xb7fb695fdc6dca82df896755e8006b1aefd26b66",
//     "gas": "292886",
//     "gasPrice": "4102498020",
//     "maxFeePerGas": "5249755782",
//     "maxPriorityFeePerGas": "1500000000",
//     "hash": "0x5b1917c883a926d34fd80b83c03f2b1a9509680d55ca4cdb8353409439d4dbe5",
//     "input": "0x755fc20c00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000028c60000000000000000000000000b7fb695fdc6dca82df896755e8006b1aefd26b660000000000000000000000000469760d321d08ab4fce75e2e799902c9f55da59000000000000000000000000000000000000000000000001bc16d674ec80000000000000000000000000000000000000000000000000000000000000000222e00000000000000000000000000000000000000000000000000000000000a7d8c0000000000000000000000000b7fb695fdc6dca82df896755e8006b1aefd26b6600000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000",
//     "nonce": 3,
//     "to": "0x095ddce4fd8818ad159d778e6a9898a2474933ca",
//     "transactionIndex": 6,
//     "value": "11000000",
//     "type": "eip1559",
//     "accessList": [],
//     "chainId": 17000,
//     "v": "1",
//     "r": "0x86d3df2288a2abda74b9041aa327b68d9750f22e1c756e3eee5b0097e74201c5",
//     "s": "0x90db9e5c9a5b4cce240b0825fafa00d4d479f0a751c31ff81c75d3b503fdb51",
//     "yParity": 1,
//     "typeHex": "0x2"
//   }
