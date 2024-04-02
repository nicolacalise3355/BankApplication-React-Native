export interface IInboxApiResponse {
    status: number;
    data: IInbox[];
}

export interface IInbox {
    title: string;
    message: string;
    timestamp: string;
}