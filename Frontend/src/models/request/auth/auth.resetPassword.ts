import { ICaptcha } from './auth.captcha';

export interface IAuthResetPassword extends ICaptcha {
    email: string;
    phone: string;
}
