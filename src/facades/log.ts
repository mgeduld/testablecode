// no test: facade for global function with side effects

import { ILog } from "../interfaces/log";

export const log: ILog = (message: string) => {
  console.log(message);
};