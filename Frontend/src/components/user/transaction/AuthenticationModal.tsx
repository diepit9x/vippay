import { authenticationRules } from '@/models/rule/antd.transaction.rule';
import { Form, Input, Modal, Typography } from 'antd';
import { InputOTP } from 'antd-input-otp';
import { OTPRef } from 'antd/es/input/OTP';
import { useEffect, useRef } from 'react';

interface IProps {
    openAuthModal: boolean;
    setOpenAuthModal: (v: boolean) => void;
}
interface IAuthCode {
    authCode: (string | undefined)[];
}

const AuthenticationModal = (props: IProps) => {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const OTP_LENGTH = 6;
    const { openAuthModal, setOpenAuthModal } = props;

    const handleCancel = () => {
        setOpenAuthModal(false);
        form.resetFields();
    };

    const handleFinish = (values: IAuthCode) => {
        const { authCode } = values;
        // console.log(authCode.join(''));
        if (
            !authCode ||
            authCode.includes(undefined) ||
            authCode.includes('') ||
            authCode.length !== OTP_LENGTH
        ) {
            return form.setFields([
                {
                    name: 'authCode',
                    errors: ['Mã xác nhận không hợp lệ'],
                },
            ]);
        }
        alert(authCode.join(''));
    };
    return (
        <Modal
            title="Xác thực giao dịch"
            open={openAuthModal}
            onOk={() => form.submit()}
            onCancel={handleCancel}
            okText={'Xác nhận'}
        >
            <Form
                className="custom-ant-form"
                form={form}
                onFinish={handleFinish}
                style={{ textAlign: 'center' }}
            >
                <Title level={4}>Google Authenticator</Title>
                <Form.Item name="authCode" rules={authenticationRules.otp}>
                    <InputOTP type="tel" inputType="numeric" length={OTP_LENGTH} />
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default AuthenticationModal;
