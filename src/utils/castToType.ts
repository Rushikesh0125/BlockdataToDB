import { txType } from "../txType";
import { stringify, Transaction } from "viem";

function getSeconds(date: Date = new Date()): number {
  return Number(date.getSeconds());
}

export const castToschema = async (input: Transaction): Promise<txType> => {
  return {
    hash: input.hash,
    nonce: Number(input.nonce),
    transaction_index: Number(input.transactionIndex),
    from_address: input.from,
    to_address: input.to,
    value: isNaN(Number(input.value)) ? 0 : Number(input.value), // Handling NaN values
    gas: Number(input.gas),
    gasprice: Number(
      isNaN(Number(input.gasPrice)) ? 0 : Number(input.gasPrice)
    ), // Handling NaN values
    input: input.input,
    block_timestamp: new Date(),
    block_number: Number(
      isNaN(Number(input.blockNumber)) ? 0 : Number(input.blockNumber)
    ), // Handling NaN values
    block_hash: input.blockHash ? input.blockHash : stringify(input.blockHash),
    max_fee_per_gas: Number(
      isNaN(Number(input.maxFeePerGas)) ? 0 : Number(input.maxFeePerGas)
    ), // Handling NaN values
    max_priority_fee_per_gas: Number(
      isNaN(Number(input.maxPriorityFeePerGas))
        ? 0
        : Number(input.maxPriorityFeePerGas)
    ), // Handling NaN values
    transaction_type: input.type,
  };
};
