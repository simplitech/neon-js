import {
  AddressAbstractsString,
  NeoscanBalance,
  NeoscanClaim
} from "./interface";

export interface NeoscanV1GetBalanceResponse {
  balance: NeoscanBalance[] | null;
  address: string;
}

export interface NeoscanV1GetClaimableResponse {
  unclaimed: number;
  claimable: NeoscanClaim[] | null;
  address: string;
}

export interface NeoscanV1GetUnclaimedResponse {
  unclaimed: number;
  address: string;
}

export interface NeoscanV1GetHeightResponse {
  height: number;
}

export type NeoscanGetAddressAbstractsResponse = AddressAbstractsString;
