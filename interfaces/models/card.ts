export interface ICardInfo {
    id: string;
    image: string;
    availability: {
        amount: number;
        currency: string;
    };
    expenses: {
        amount: number;
        currency: string;
    };
    cardNumber: number;
}