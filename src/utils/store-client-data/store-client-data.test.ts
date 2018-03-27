import test from 'ava';
import { factory } from './factory';
import { IStoreData } from '../../interfaces/store-data';
import { INormalizedClientData } from '../../interfaces/normalized-client-data';

test('stores client data', async t => {
  const storeData: IStoreData = (apiKey: string, data: any) => Promise.resolve();

  const storeClientData = factory(storeData);

  const data: INormalizedClientData = {
    firstName: 'Amy',
    lastName: 'Martin',
    age: 64
  };

  storeClientData(data).then(() => {
    t.pass();
  });
});