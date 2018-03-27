import test from 'ava';
import { factory } from './factory';
import { IGetClientData } from '../interfaces/get-client-data';
import { IStoreClientData } from '../interfaces/store-client-date';
import { INormalizedClientData } from '../interfaces/normalized-client-data';
import { ILog } from '../interfaces/log';

test('main', async t => {
  const clientId = '123';

  const getClientData: IGetClientData = (clientId: string) => Promise.resolve({
    name: 'Jennifer Gray',
    age: 10
  });

  const storeClientData: IStoreClientData = (data: INormalizedClientData) => Promise.resolve();

  const log: ILog = (message: string) => {
    t.is(message, `Data saved for clientId ${clientId}`);
  };

  const main = factory(getClientData, storeClientData, log);

  main(clientId);
});