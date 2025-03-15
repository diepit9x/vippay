import { vndFormat } from '@/helpers/date.range';
import { transferRules } from '@/models/rule/antd.transaction.rule';
import { ITransfer } from '@/models/request/transaction/transaction.transfer';
import { Button, Form, Input, InputNumber } from 'antd';
import type { FormProps } from 'antd';
import { useState } from 'react';
import AuthenticationModal from '@/components/user/transaction/AuthenticationModal';

const TransferForm = () => {
    const [form] = Form.useForm();
    const [validUsername, setValidUsername] = useState<string | null>(null);
    const [username, setUsername] = useState<string>('');
    const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);

    const handleCheckUsername = (username: string) => {
        setValidUsername(null);
        if (username) {
            if (username === 'luauytin') {
                setValidUsername('Nguyễn Tuấn Điệp');
            }
        }
    };
    const onFinish: FormProps<ITransfer>['onFinish'] = (values) => {
        console.log('Success:', values);
        setOpenAuthModal(true);
    };

    return (
        <>
            <Form
                className="custom-ant-form"
                form={form}
                onFinish={onFinish}
                name="validateOnly"
                layout="vertical"
                autoComplete="on"
            >
                <Form.Item<ITransfer>
                    name="username"
                    label="Tài khoản nhận"
                    rules={transferRules.username}
                >
                    <Input
                        autoFocus
                        allowClear={true}
                        placeholder="Tài khoản nhận"
                        onChange={(e) => handleCheckUsername(e.target.value.trim())}
                        onBlur={(e) =>
                            form.setFieldValue('username', e.target.value.trim())
                        }
                        suffix={<div className="suffix-checking">{validUsername}</div>}
                    />
                </Form.Item>
                <Form.Item<ITransfer>
                    name="amount"
                    label="Số tiền"
                    rules={transferRules.amount}
                >
                    <InputNumber<number>
                        style={{ width: '100%' }}
                        type="tel"
                        placeholder="Số tiền"
                        formatter={(value) =>
                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }
                        parser={(value) =>
                            value?.replace(/\\s?|(,*)/g, '') as unknown as number
                        }
                        addonAfter={
                            <div className="amount-checking">
                                Số dư:{' '}
                                <span className="balance">{vndFormat(9999999999)}</span>
                            </div>
                        }
                    />
                </Form.Item>
                <Form.Item<ITransfer>
                    name="notice"
                    label="Ghi chú"
                    rules={transferRules.notice}
                >
                    <Input.TextArea
                        rows={3}
                        maxLength={200}
                        placeholder="Ghi chú"
                        count={{ show: true }}
                    />
                </Form.Item>
                <Form.Item style={{ marginTop: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Chuyển tiền
                    </Button>
                </Form.Item>
            </Form>
            <AuthenticationModal
                openAuthModal={openAuthModal}
                setOpenAuthModal={setOpenAuthModal}
            />
        </>
    );
};
export default TransferForm;
