import { IStoreData } from '../../interfaces/store-data';
import { INormalizedClientData } from '../../interfaces/normalized-client-data';
import { IStoreClientData } from '../../interfaces/store-client-date';

const apiKey = process.env.ACME_API_KEY

export const factory = (storeData: IStoreData): IStoreClientData => (data: INormalizedClientData): Promise<any> => {
  return storeData(apiKey, data);
};