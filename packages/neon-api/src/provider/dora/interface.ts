export interface AddressAbstracts {
  totalPages: number;
  totalEntries: number;
  pageSize: number;
  pageNumber: number;
  entries: Entry[];
}

export interface Entry {
  txid: string;
  time: number;
  blockHeight: number;
  asset: string;
  amount: number;
  addressTo: string;
  addressFrom: string;
}
