import { ICaptcha } from './auth.captcha';

export interface IAuthRegister extends ICaptcha {
    username: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    rePassword: string;
}
