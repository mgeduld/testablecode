export interface IStoreData {
  (apiKey: string, data: any): Promise<any>
};