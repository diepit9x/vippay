import { IAuthResetPassword } from '@/models/auth/auth.resetPassword';
import { antdFormRules } from '@/models/rule/antd.form.rule';
import { Form, Input } from 'antd';

const ResetPassword = () => {
    return (
        <>
            <Form.Item<IAuthResetPassword>
                label="Email"
                name="email"
                rules={antdFormRules.email}
            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item<IAuthResetPassword>
                label="Phone"
                name="phone"
                rules={antdFormRules.phone}
            >
                <Input placeholder="Phone" />
            </Form.Item>
        </>
    );
};
export default ResetPassword;
