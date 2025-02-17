import { Rule } from 'antd/es/form';

type FormRules = {
    [key: string]: Rule[];
};

export const antdFormRules: FormRules = {
    username: [{ required: true, message: 'Vui lòng nhập username' }],
    usernamePE: [{ required: true, message: 'Vui lòng nhập username/email/phone' }],
    fullName: [{ required: true, message: 'Vui lòng nhập họ tên' }],
    password: [{ required: true, message: 'Vui lòng nhập mật khẩu' }],
    rePassword: [
        {
            required: true,
            message: 'Vui lòng nhập lại mật khẩu',
        },
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Nhập lại mật khẩu không khớp'));
            },
        }),
    ],
    email: [
        { required: true, message: 'Vui lòng nhập email' },
        { type: 'email', message: 'Email không đúng định dạng' },
    ],
    phone: [{ required: true, message: 'Vui lòng nhập số điện thoại' }],
    captcha: [{ required: true, message: 'Vui lòng xác nhận CAPTCHA!' }],
};
