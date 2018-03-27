import { IFetchedClientData } from "./fetched-client-data";

export interface IGetClientData {
  (clientId: string): Promise<IFetchedClientData>;
};