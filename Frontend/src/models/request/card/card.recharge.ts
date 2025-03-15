import { IDateCommon } from '../common.date';
import { ICard } from './card';

export interface ICardRecharge extends ICard, IDateCommon {
    user: string;
}
