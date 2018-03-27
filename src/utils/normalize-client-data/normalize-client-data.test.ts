import test from 'ava';
import { normalizeClientData } from '.';
import { IFetchedClientData } from '../../interfaces/fetched-client-data';
import { INormalizedClientData } from '../../interfaces/normalized-client-data';

test('normalizes client data', t => {
  const fetchedData: IFetchedClientData = {
    name: 'Bill Smith',
    age: 21
  };

  const expected: INormalizedClientData = {
    firstName: 'Bill',
    lastName: 'Smith',
    age: 21
  };

  const actual: INormalizedClientData = normalizeClientData(fetchedData);

  t.deepEqual(actual, expected);
});