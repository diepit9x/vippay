export interface ITransactionFees {
    id: number;
    type: string;
    role: string;
    label: string;
    unit: 'PERCENTAGE' | 'FIXED';
    currency: string;
    feeAmount: number;
}
