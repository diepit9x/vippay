import { IDateCommon } from '@/models/common.date';
import ICardFee from '@/models/response/card/card.fee';
export interface ICardRecharge extends IDateCommon {
    id: number;
    label: string;
    type: string;
    status: boolean;
    fees: ICardFee[];
    isAuto: boolean;
    autoFeeUpdate: boolean;
    feeMarkup: number;
}
