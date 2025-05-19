import { useEffect, useState } from 'react';
import { Form, Input, Button, Space, Drawer, Row, Col, Select } from 'antd';
import { ICardRecharge } from '@/models/response/card/card.recharge';
import dayjs from 'dayjs';

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
    }, [cardData, form]);

    const setFieldsValueToForm = (data: ICardRecharge) => {
        form.setFieldsValue({
            id: data.id,
            label: data.label,
            type: data.type,
            status: data.status,
            createdAt: dayjs(data.createdAt).format('DD/MM/YYYY HH:mm'),
            updatedAt: dayjs(data.updatedAt).format('DD/MM/YYYY HH:mm'),
        });
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
        >
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item label="ID" name="id">
                            <Input disabled />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item label="Tên thẻ" name="label">
                            <Input disabled={!isEdit} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item label="Loại thẻ" name="type">
                            <Input disabled={!isEdit} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item label="Trạng thái" name="status">
                            <Select
                                options={[
                                    { value: true, label: 'Hoạt động' },
                                    { value: false, label: 'Bảo trì' },
                                ]}
                                disabled={!isEdit}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item label="Ngày tạo" name="createdAt">
                            <Input variant="borderless" disabled />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Cập nhật" name="updatedAt">
                            <Input variant="borderless" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Space>
                    {isEdit ? (
                        <>
                            <Button type="primary" htmlType="submit">
                                Lưu
                            </Button>
                            <Button
                                htmlType="button"
                                onClick={() => {
                                    setFieldsValueToForm(cardData!);
                                    setIsEdit(false);
                                }}
                            >
                                Hủy
                            </Button>
                        </>
                    ) : (
                        <Button
                            type="default"
                            htmlType="button"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsEdit(true);
                            }}
                        >
                            Chỉnh sửa
                        </Button>
                    )}
                </Space>
            </Form>
        </Drawer>
    );
};

export default ViewCardDetail;
