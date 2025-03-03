import {
    getAuthActionInfo,
    IAuthActionPrams,
    TAuthAction,
} from '@/models/auth/auth.action';
import { IAuthLogin } from '@/models/auth/auth.login';
import { IAuthResetPassword } from '@/models/auth/auth.resetPassword';
import { Button, Form, message, Modal } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Login from './form/Login';
import ResetPassword from './form/ResetPassword';
import Register from './form/Register';

interface IProps {
    modalAuthOpen: boolean;
    setModalAuthOpen: (v: boolean) => void;
    actionAuthModal: TAuthAction | null;
    setActionAuthModal: (v: TAuthAction | null) => void;
}

const AuthUserModal = ({
    modalAuthOpen,
    setModalAuthOpen,
    actionAuthModal,
    setActionAuthModal,
}: IProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const actionInfo: IAuthActionPrams = getAuthActionInfo(actionAuthModal);

    useEffect(() => {
        recaptchaRef.current?.reset();
    }, [actionAuthModal]);

    const handleCancel = useCallback(() => {
        setModalAuthOpen(false);
        form.resetFields();
    }, [setModalAuthOpen, form]);

    const onFinish = useCallback(async (values: IAuthLogin | IAuthResetPassword) => {
        setIsLoading(true);
        const captchaValue = recaptchaRef.current?.getValue();
        if (!captchaValue) {
            message.error('Vui lòng xác nhận CAPTCHA!');
            setIsLoading(false);
            return;
        }
        console.log('Dữ liệu gửi đi:', { ...values, captcha: captchaValue });
        recaptchaRef.current?.reset();
        message.success('Thành công!');
        setTimeout(() => setIsLoading(false), 3000);
    }, []);

    const renderFormFields = () => {
        switch (actionAuthModal) {
            case 'Login':
                return <Login setActionAuthModal={setActionAuthModal} />;
            case 'ResetPassword':
                return <ResetPassword />;
            case 'Register':
                return <Register />;
            default:
                return null;
        }
    };

    return (
        <Modal
            className="custom-ant-modal"
            title={actionInfo.label}
            open={modalAuthOpen}
            onOk={() => form.submit()}
            onCancel={handleCancel}
            okText={actionInfo.button}
            okButtonProps={{ loading: isLoading }}
            destroyOnClose={true}
            footer={(_, { OkBtn, CancelBtn }) => (
                <>
                    <Button
                        className="bg-bg-success text-bg-success"
                        onClick={() =>
                            setActionAuthModal(
                                actionAuthModal !== 'Login' ? 'Login' : 'Register',
                            )
                        }
                    >
                        {
                            getAuthActionInfo(
                                actionAuthModal !== 'Login' ? 'Login' : 'Register',
                            ).button
                        }
                    </Button>
                    <CancelBtn />
                    <OkBtn />
                </>
            )}
        >
            <Form
                form={form}
                className="custom-ant-form"
                name="basic"
                layout="vertical"
                onFinish={onFinish}
            >
                {renderFormFields()}
                <Form.Item
                    name="captcha"
                    label="Captcha"
                    tooltip="Bằng việc nhấn xác thực. Được xem như là đồng ý về điều khoản sử dung của vippay"
                    rules={[{ required: true, message: 'Vui lòng xác nhận CAPTCHA!' }]}
                >
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AuthUserModal;
