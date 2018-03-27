import { IFetchedClientData } from '../../interfaces/fetched-client-data';
import { IGetData } from '../../interfaces/get-data';
import { IGetClientData } from '../../interfaces/get-client-data';

export const factory = (getter: IGetData): IGetClientData =>
  (clientId: string): Promise<IFetchedClientData> => {
    return getter(`http://some-endpoint/client-data/?clientId=${clientId}`);
  };