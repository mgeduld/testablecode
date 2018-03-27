import { IFetchedClientData } from '../../interfaces/fetched-client-data';
import { INormalizedClientData } from '../../interfaces/normalized-client-data';

export const normalizeClientData = ({ name, age }: IFetchedClientData): INormalizedClientData => {
  const [firstName, lastName] = name.split(' ');
  return {
    firstName,
    lastName,
    age
  }
};