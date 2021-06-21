import { logging, settings, u, wallet } from "@cityofzion/neon-core";
import { ITransaction, PastTransaction, Provider, IAddressAbstract } from "../common";
import {
  getBalance,
  getClaims,
  getHeight,
  getMaxClaimAmount,
  getRPCEndpoint,
  getTransaction,
  getAddressAbstracts,
} from "./core";

const log = logging.default("api");
export class Dora implements Provider {
  private url: string;

  public get name(): string {
    return `Dora[${this.url}]`;
  }

  public constructor(url: string) {
    if (settings.networks[url] && settings.networks[url].extra.dora) {
      this.url = settings.networks[url].extra.dora;
    } else {
      this.url = url;
    }
    log.info(`Created Neoscan Provider: ${this.url}`);
  }

  public getRPCEndpoint(): Promise<string> {
    return getRPCEndpoint(this.url);
  }

  public getBalance(address: string): Promise<wallet.Balance> {
    return getBalance(this.url, address);
  }
  public getClaims(address: string): Promise<wallet.Claims> {
    return getClaims(this.url, address);
  }
  public getMaxClaimAmount(address: string): Promise<u.Fixed8> {
    return getMaxClaimAmount(this.url, address);
  }
  public getHeight(): Promise<number> {
    return getHeight(this.url);
  }
  public async getTransactionHistory(
    _address: string
  ): Promise<PastTransaction[]> {
    throw new Error("Method not implemented.");
  }
  public getTransaction(txid: string): Promise<ITransaction> {
    return getTransaction(this.url, txid);
  }
  public getAddressAbstracts(
    address: string,
    page: number
  ): Promise<IAddressAbstract> {
    return getAddressAbstracts(this.url, address, page);
  }
}

export default Dora;
