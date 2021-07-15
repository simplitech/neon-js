import { AddressAbstracts, Entry } from "../dora/interface";

// An AddressAbstracts interface with a string "amount" field in entries
export interface AddressAbstractsString
  extends Omit<AddressAbstracts, "entries"> {
  entries: EntryString[];
}

// An Entry interface with a string "amount" field
export type EntryString = Omit<Entry, "amount"> & { amount: string };


export interface NeoscanBalance {
  asset: string;
  amount: number;
  unspent: NeoscanTx[];
}

export interface NeoscanClaim {
  txid: string;
  n: number;
  value: number;
  unclaimed: number;
  start_height: number;
  end_height: number;
}

export interface NeoscanPastTx {
  vouts: [
    {
      value: number;
      transaction_id: number;
      asset: string;
      address_hash: string;
    }
  ];
  vin: [
    {
      value: number;
      txid: string;
      n: number;
      asset: string;
      address_hash: string;
    }
  ];
  type: string;
  txid: string;
  transfers: [
    {
      txid: string;
      time: number;
      contract: string;
      block_height: number;
      amount: number;
      address_to: string;
      address_from: string;
    }
  ];
  time: number;
  sys_fee: string;
  size: number;
  net_fee: string;
  id: number;
  claims: [
    {
      value: number;
      txid: string;
      n: number;
      asset: string;
      address_hash: string;
    }
  ];
  block_height: number;
  block_hash: string;
  asset: null;
}

export interface NeoscanTx {
  txid: string;
  value: number;
  n: number;
}
