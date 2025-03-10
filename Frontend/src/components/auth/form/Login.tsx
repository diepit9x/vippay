import { TAuthAction } from '@/models/auth/auth.action';
import { IAuthLogin } from '@/models/auth/auth.login';
import { authRules } from '@/models/rule/antd.auth.rule';
import { Form, Input } from 'antd';

interface IProps {
    setActionAuthModal: (v: TAuthAction) => void;
}

const Login = (props: IProps) => {
    return (
        <>
            <Form.Item<IAuthLogin>
                label="Tài khoản"
                name="username"
                rules={authRules.usernamePE}
            >
                <Input placeholder="Username/Email/Phone" />
            </Form.Item>
            <Form.Item<IAuthLogin>
                label="Mật khẩu"
                name="password"
                rules={authRules.password}
            >
                <Input.Password
                    placeholder="Password"
                    addonAfter={
                        <div
                            className="forgot"
                            onClick={() => props.setActionAuthModal('ResetPassword')}
                        >
                            Quên MK?
                        </div>
                    }
                />
            </Form.Item>
        </>
    );
};
export default Login;
