import { IAuthRegister } from '@/models/auth/auth.register';
import { authRules } from '@/models/rule/antd.auth.rule';
import { Form, Input, Row, Col } from 'antd';

const Register = () => {
    return (
        <Row gutter={10}>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Username"
                    name="username"
                    rules={authRules.username}
                >
                    <Input placeholder="Username" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Full name"
                    name="fullName"
                    rules={authRules.fullName}
                >
                    <Input placeholder="Full name" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Email"
                    name="email"
                    rules={authRules.email}
                >
                    <Input placeholder="Email" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Phone"
                    name="phone"
                    rules={authRules.phone}
                >
                    <Input placeholder="Phone" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Mật khẩu"
                    name="password"
                    rules={authRules.password}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Nhập lại mật khẩu"
                    name="rePassword"
                    rules={authRules.rePassword}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Register;
