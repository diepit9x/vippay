import { IDateCommon } from '@/models/common.date';
import { ICard } from '@/models/request/card/card';

export interface ICardRecharge extends ICard, IDateCommon {
    user: string;
}
