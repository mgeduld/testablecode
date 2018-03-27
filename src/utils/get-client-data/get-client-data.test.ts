import test from 'ava';
import { factory } from './factory';
import { IGetData } from '../../interfaces/get-data';
import { IFetchedClientData } from '../../interfaces/fetched-client-data';

test('gets client data', async t => {

  const getter: IGetData = (url: string) => {
    return Promise.resolve({
      name: 'George Williamson',
      age: 37
    });
  };

  const getClientData = factory(getter);

  getClientData('1234').then((response: IFetchedClientData) => {

    const expected: IFetchedClientData = {
      name: 'George Williamson',
      age: 37
    };

    t.deepEqual(response, expected);
  });

});