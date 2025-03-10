import { FormRules } from './antd.form.rule';

export const transferRules: FormRules = {
    username: [{ required: true, message: 'Vui lòng nhập tài khoản nhận' }],
    amount: [
        { required: true, message: 'Vui lòng nhập số tiền' },
        { type: 'integer', min: 1000, message: 'Vui lòng nhập số tiền tổi thiểu 1000' },
    ],
    notice: [{ max: 200, message: 'Ghi chú tối đa 200 kí tự' }],
};
export const authenticationRules: FormRules = {
    otp: [
        { required: true, message: 'Vui lòng nhập mã xác nhận' },
        { validator: async () => Promise.resolve() },
    ],
};
