// no test: injected dependencies

import { factory } from './factory';
import { storeData } from '../../facades/store-data';
import { IStoreClientData } from '../../interfaces/store-client-date';

export const storeClientData: IStoreClientData = factory(storeData);