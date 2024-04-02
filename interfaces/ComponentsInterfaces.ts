import { ITransaction } from "./models/transaction";

export interface TransactionsListProps {
    transactions: ITransaction[];
    listHeight?: number;
}