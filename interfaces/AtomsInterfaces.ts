import { ITransaction } from "./models/transaction";

export interface CardBoxEmptyProp {
    uri: string;
}

export interface CardBoxProp {
    uri: string;
    availability: string; 
    expenses: string; 
    digits: string;
}

export interface TransactionBoxProps{
    transaction: ITransaction;
}

export interface MessageBoxProps{
    timestamp: string;
    title: string;
    message: string;
    callbackClose: () => void;
}