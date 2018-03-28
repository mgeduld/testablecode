## Putting it all together: how can we make this code testable?

```typescript
import fetch from 'node-fetch';
// imaginary 3rd-party library
import acmeDataStorage from 'acme-data-storage';
import {IFetchedClientData, INormalizedClientData} from './interfaces/client-data';

const getClientData = (clientId: string): Promise<IFetchedClientData> => {
  return fetch(`http://some-endpoint/client-data/?clientId=${clientId}`)
    .then(response => reponse.json())
};

const normalizeClientData = ({name, age}: IFetchedClientData) : INormalizedClientData => {
  const [firstName, lastName] = name.split(' ');
  return {
    firstName,
    lastName,
    age
  }
};

const storeClientData = (data: INormalizedClientData) => {
  return acmeDataStorge.storeData(apikey: process.env.ACME_API_KEY, data);
};

export const main = async (clientId: string): void => {
  const data: IFetchedClientData = await getClientData(clientId);
  const normalizedData: INormalizedClientData = normalizeClientData(data);
  storeClientData(normalizedData)
    .then(() => console.log('Data saved for clientId', clientId));
};

main(process.argv[3]);
```

See the `src` directory for a solution.