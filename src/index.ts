import { factory } from './main/factory';
import { getClientData } from './utils/get-client-data';
import { storeClientData } from './utils/store-client-data';
import { log } from './facades/log';

const main = factory(getClientData, storeClientData, log);
const clientId = process.argv[2];

main(clientId);