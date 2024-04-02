import { ApiResponse } from '../interfaces/ApiInterfaces';
import { CardInfoDataJson } from '../json/cardInfo';
import { InboxDataJson } from '../json/inbox';
import { TransactionsDataJson } from '../json/transactions';

const datas: { [key: string] : any } = {
  "/json/cardInfo": CardInfoDataJson,
  "/json/inbox": InboxDataJson,
  "/json/transactions": TransactionsDataJson,
}

const httpSimulation = async (filePath: string, responseDelay: number = 1000): Promise<ApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, responseDelay))
  try {
    const response = datas[filePath];
    return { data: response, error: null };

  } catch (error) {
    return { data: {}, error: 'Error' };
  }
};

export default httpSimulation;
