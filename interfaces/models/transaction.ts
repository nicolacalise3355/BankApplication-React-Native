export interface ITransaction {
    id: string;
    amount: number;
    currency: string;
    date: number;
    location: string;
    merchant: string;
    status: string;
}