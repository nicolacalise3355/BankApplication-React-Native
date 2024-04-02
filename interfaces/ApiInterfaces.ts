import { IInbox } from "./models/Inbox";
import { ICardInfo } from "./models/card";
import { ITransaction } from "./models/transaction";

export type ApiDataType = IInbox[] | ITransaction[] | ICardInfo | {};

export interface ApiResponse {
    data: ApiDataType;
    error: string | null;
}

export interface IHttpSimulation {
    data: ApiDataType;
    error: string | null;
    isLoading: boolean;
}