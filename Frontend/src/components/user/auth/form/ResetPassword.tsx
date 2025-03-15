import { IAuthResetPassword } from '@/models/request/auth/auth.resetPassword';
import { authRules } from '@/models/rule/antd.auth.rule';
import { Form, Input } from 'antd';

const ResetPassword = () => {
    return (
        <>
            <Form.Item<IAuthResetPassword>
                label="Email"
                name="email"
                rules={authRules.email}
            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item<IAuthResetPassword>
                label="Phone"
                name="phone"
                rules={authRules.phone}
            >
                <Input placeholder="Phone" />
            </Form.Item>
        </>
    );
};
export default ResetPassword;
