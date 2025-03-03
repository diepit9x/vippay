import { IAuthRegister } from '@/models/auth/auth.register';
import { antdFormRules } from '@/models/rule/antd.form.rule';
import { Form, Input, Row, Col } from 'antd';

const Register = () => {
    return (
        <Row gutter={10}>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Username"
                    name="username"
                    rules={antdFormRules.username}
                >
                    <Input placeholder="Username" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Full name"
                    name="fullName"
                    rules={antdFormRules.fullName}
                >
                    <Input placeholder="Full name" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Email"
                    name="email"
                    rules={antdFormRules.email}
                >
                    <Input placeholder="Email" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Phone"
                    name="phone"
                    rules={antdFormRules.phone}
                >
                    <Input placeholder="Phone" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Mật khẩu"
                    name="password"
                    rules={antdFormRules.password}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item<IAuthRegister>
                    label="Nhập lại mật khẩu"
                    name="rePassword"
                    rules={antdFormRules.rePassword}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Register;
