// no tests: facade wrapping 3rd-party code that produces side effects

import { IGetData } from '../interfaces/get-data';


//fake 3rd-party code: import fetch from 'node-fetch'
const fetch = (url: string) => Promise.resolve({
  json() {
    return {
      name: 'Mary Jones',
      age: 44
    }
  }
});

export const getData: IGetData = (url: string): Promise<any> => {
  return fetch(url).then(response => response.json());
};