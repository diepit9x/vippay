import {
    getAuthActionInfo,
    IAuthActionPrams,
    TAuthAction,
} from '@/models/auth/auth.action';
import { IAuthLogin } from '@/models/auth/auth.login';
import { IAuthResetPassword } from '@/models/auth/auth.resetPassword';
import { Button, Form, Input, message, Modal } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import FormLogin from './form/FormLogin';
import FormResetPassword from './form/FormResetPassword';
import FormRegister from './form/FormRegister';

interface IProps {
    modalAuthOpen: boolean;
    setModalAuthOpen: (v: boolean) => void;
    action: TAuthAction;
}

const AuthUserModal = ({ modalAuthOpen, setModalAuthOpen, action }: IProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [currentAction, setCurrentAction] = useState<TAuthAction>(action);
    const actionInfo: IAuthActionPrams = getAuthActionInfo(currentAction);
    useEffect(() => {
        recaptchaRef.current?.reset();
    }, [currentAction]);

    const handleOpenModal = useCallback(() => {
        setCurrentAction(action);
        form.resetFields();
    }, [action, form]);

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
        switch (currentAction) {
            case 'Login':
                return <FormLogin setCurrentAction={setCurrentAction} />;
            case 'ResetPassword':
                return <FormResetPassword />;
            case 'Register':
                return <FormRegister />;
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
            afterOpenChange={(open) => open && handleOpenModal()}
            footer={(_, { OkBtn, CancelBtn }) => (
                <>
                    <Button
                        className="bg-bg-success text-bg-success"
                        onClick={() =>
                            setCurrentAction(
                                currentAction !== 'Login' ? 'Login' : 'Register',
                            )
                        }
                    >
                        {
                            getAuthActionInfo(
                                currentAction !== 'Login' ? 'Login' : 'Register',
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
