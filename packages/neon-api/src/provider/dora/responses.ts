import { NeoCliBalance, NeoCliClaimable } from "../neoCli/responses";
import { AddressAbstracts } from "./interface";

export interface DoraGetBalanceResponse {
  balance: NeoCliBalance[];
  address: string;
}

export interface DoraGetUnclaimedResponse {
  available: number;
  unavailable: number;
  unclaimed: number;
}

export interface DoraGetClaimableResponse {
  address: string;
  claimable: NeoCliClaimable[];
  unclaimed: number;
}

export type DoraGetAddressAbstractsResponse = AddressAbstracts;
