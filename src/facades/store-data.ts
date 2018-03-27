// no tests: facade wrapping 3rd-party code that produces side effects

import { IStoreData } from '../interfaces/store-data';


//fake 3rd-party code: import acmeDataStorage from 'acme-data-storage';
const acmeDataStorage = {
  storeData(apiKey: string, data: any) {
    return Promise.resolve({})
  }
};

export const storeData = (apiKey: string, data: any): Promise<any> => {
  return acmeDataStorage.storeData(apiKey, data);
};