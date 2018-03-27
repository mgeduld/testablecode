// no test: injected dependencies

import { getData } from '../../facades/get-data';
import { factory } from './factory';
import { IGetClientData } from '../../interfaces/get-client-data';

export const getClientData: IGetClientData = factory(getData);