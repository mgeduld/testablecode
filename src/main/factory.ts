import { normalizeClientData } from '../utils/normalize-client-data';
import { IFetchedClientData } from '../interfaces/fetched-client-data';
import { INormalizedClientData } from '../interfaces/normalized-client-data';
import { IGetClientData } from '../interfaces/get-client-data';
import { IStoreClientData } from '../interfaces/store-client-date';
import { ILog } from '../interfaces/log';

export const factory = (
  getClientData: IGetClientData,
  storeClientData: IStoreClientData,
  log: ILog
) => async (clientId: string) => {
  const data: IFetchedClientData = await getClientData(clientId);
  const normalizedData: INormalizedClientData = normalizeClientData(data);
  storeClientData(normalizedData)
    .then(() => log(`Data saved for clientId ${clientId}`));
};