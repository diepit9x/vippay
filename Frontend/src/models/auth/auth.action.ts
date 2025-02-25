export type TAuthAction = 'Login' | 'Register' | 'ResetPassword' | 'VerifyEmail';

export interface IAuthActionPrams {
    label: string;
    button: string;
}
export const getAuthActionInfo = (action?: TAuthAction | null) => {
    const actions: Record<TAuthAction, IAuthActionPrams> = {
        Login: { label: 'Đăng nhập', button: 'Đăng nhập' },
        Register: { label: 'Đăng ký', button: 'Tạo tài khoản' },
        ResetPassword: { label: 'Đặt lại mật khẩu', button: 'Đặt lại' },
        VerifyEmail: { label: 'Xác minh email', button: 'Xác minh' },
    };

    if (action && actions[action]) {
        return actions[action];
    }

    return { label: 'Không xác định', button: 'Thử lại' };
};
