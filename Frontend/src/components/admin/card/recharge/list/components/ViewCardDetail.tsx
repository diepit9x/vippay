import { useEffect, useState } from 'react';
import {
    Drawer,
    Descriptions,
    Button,
    Input,
    Form,
    Select,
    Space,
    InputNumber,
} from 'antd';
import { ICardRecharge } from '@/models/response/card/card.recharge';
import dayjs from 'dayjs';
import { datetimeFormat } from '@/helpers/date.range';

interface IProps {
    openViewCardDetail: boolean;
    setOpenViewCardDetail: (v: boolean) => void;
    cardData: ICardRecharge | null;
    setCardData: (v: ICardRecharge | null) => void;
}

const ViewCardDetail = (props: IProps) => {
    const { openViewCardDetail, setOpenViewCardDetail, cardData, setCardData } = props;

    const [form] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (cardData) {
            setFieldsValueToForm(cardData);
        } else {
            form.resetFields();
        }
    }, [cardData]);

    const setFieldsValueToForm = (data: ICardRecharge) => {
        form.setFieldsValue(data);
    };

    const onClose = () => {
        setOpenViewCardDetail(false);
        setIsEdit(false);
        setCardData(null);
        form.resetFields();
    };

    const onFinish = (values: any) => {
        console.log('Updated values:', values);
        setIsEdit(false);
    };

    return (
        <Drawer
            title="Chi tiết loại thẻ"
            placement="right"
            size="large"
            onClose={onClose}
            open={openViewCardDetail}
            destroyOnClose
        >
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Descriptions bordered column={1} size="middle">
                    <Descriptions.Item label="ID">
                        <Form.Item name="id" noStyle>
                            <Input hidden />
                            <span>{cardData?.id}</span>
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Tên thẻ">
                        <Form.Item
                            name="label"
                            noStyle
                            rules={[{ required: true, message: 'Vui lòng nhập tên thẻ' }]}
                        >
                            {isEdit ? <Input /> : <span>{cardData?.label}</span>}
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Loại thẻ">
                        <Form.Item
                            name="type"
                            noStyle
                            rules={[
                                { required: true, message: 'Vui lòng nhập loại thẻ' },
                            ]}
                        >
                            {isEdit ? <Input /> : <span>{cardData?.type}</span>}
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Trạng thái">
                        <Form.Item name="status" noStyle rules={[{ required: true }]}>
                            {isEdit ? (
                                <Select
                                    options={[
                                        { value: true, label: 'Hoạt động' },
                                        { value: false, label: 'Bảo trì' },
                                    ]}
                                    style={{ width: 150 }}
                                />
                            ) : (
                                <span>{cardData?.status ? 'Hoạt động' : 'Bảo trì'}</span>
                            )}
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Duyệt thẻ">
                        <Form.Item name="isAuto" noStyle rules={[{ required: true }]}>
                            {isEdit ? (
                                <Select
                                    options={[
                                        { value: true, label: 'Tự động' },
                                        { value: false, label: 'Thủ công' },
                                    ]}
                                    style={{ width: 150 }}
                                />
                            ) : (
                                <span>{cardData?.status ? 'Tự động' : 'Thủ công'}</span>
                            )}
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Duyệt thẻ">
                        <Form.Item name="isAuto" noStyle rules={[{ required: true }]}>
                            {isEdit ? (
                                <Select
                                    options={[
                                        { value: true, label: 'Tự động' },
                                        { value: false, label: 'Thủ công' },
                                    ]}
                                    style={{ width: 150 }}
                                />
                            ) : (
                                <span>{cardData?.isAuto ? 'Tự động' : 'Thủ công'}</span>
                            )}
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Bảng giá">
                        <Form.Item
                            name="autoFeeUpdate"
                            noStyle
                            rules={[{ required: true }]}
                        >
                            {isEdit ? (
                                <Select
                                    options={[
                                        { value: true, label: 'Tự động' },
                                        { value: false, label: 'Thủ công' },
                                    ]}
                                    style={{ width: 150 }}
                                />
                            ) : (
                                <span>
                                    {cardData?.autoFeeUpdate ? 'Tự động' : 'Thủ công'}
                                </span>
                            )}
                        </Form.Item>
                    </Descriptions.Item>

                    <Descriptions.Item label="Phí bổ sung">
                        <Form.Item
                            name="feeMarkup"
                            noStyle
                            rules={[
                                { required: true, message: 'Vui lòng nhập phí bổ sung' },
                            ]}
                        >
                            {isEdit ? (
                                <InputNumber addonAfter="%" />
                            ) : (
                                <span>{cardData?.feeMarkup}%</span>
                            )}
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày tạo">
                        <span>{datetimeFormat(cardData?.createdAt ?? '')}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Cập nhật">
                        <span>{datetimeFormat(cardData?.updatedAt ?? '')}</span>
                    </Descriptions.Item>
                </Descriptions>
                <div style={{ marginTop: 24 }}>
                    {isEdit ? (
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Lưu thay đổi
                            </Button>
                            <Button
                                onClick={() => {
                                    setFieldsValueToForm(cardData!);
                                    setIsEdit(false);
                                }}
                            >
                                Hủy
                            </Button>
                        </Space>
                    ) : (
                        <Button type="default" onClick={() => setIsEdit(true)}>
                            Chỉnh sửa
                        </Button>
                    )}
                </div>
            </Form>
        </Drawer>
    );
};

export default ViewCardDetail;
