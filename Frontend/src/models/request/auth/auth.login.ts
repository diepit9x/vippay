import { ICaptcha } from './auth.captcha';

export interface IAuthLogin extends ICaptcha {
    username: string;
    password: string;
    remember?: boolean;
    captcha: string;
}
