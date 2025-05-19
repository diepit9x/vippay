import { transferRules } from '@/models/rule/antd.transaction.rule';
import { ITransfer } from '@/models/request/transaction/transaction.transfer';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import type { FormProps } from 'antd';
import { useState } from 'react';
import AuthenticationModal from '@/components/user/transaction/AuthenticationModal';
import { vndMoneyFormat } from '@/helpers/format';

const WithdrawForm = () => {
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
    const options = [
        {
            value: 1,
            label: 'Vietinbank',
        },
        {
            value: 2,
            label: 'Vietcombank',
        },
        {
            value: 3,
            label: 'Agribank',
        },
        {
            value: 4,
            label: 'Momo',
        },
    ];

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
                    label="Chọn ngân hàng/Ví"
                    rules={transferRules.username}
                >
                    <Select
                        showSearch
                        placeholder="Chọn ngân hàng/Ví"
                        optionFilterProp="label"
                        options={options}
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
                                <span className="balance">
                                    {vndMoneyFormat(9999999999)}
                                </span>
                            </div>
                        }
                    />
                </Form.Item>
                <Form.Item style={{ marginTop: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Rút tiền
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
export default WithdrawForm;
