import { ICardRecharge } from '@/models/response/card/card.recharge';
import { Col, Form, Input, Modal, Row, Select } from 'antd';
import { useCallback } from 'react';

interface IProps {
    openAddCardModal: boolean;
    setOpenAddCardModal: (v: boolean) => void;
}

const AddCardModal = (props: IProps) => {
    const { openAddCardModal, setOpenAddCardModal } = props;
    const [form] = Form.useForm();

    const handleCancel = () => {
        setOpenAddCardModal(false);
    };
    const onFinish = useCallback(async (values: ICardRecharge) => {
        console.log('Dữ liệu gửi đi:', { ...values });
    }, []);

    return (
        <Modal
            title="Thêm thẻ"
            open={openAddCardModal}
            onOk={() => form.submit()}
            onCancel={handleCancel}
        >
            <Form form={form} name="basic" layout="vertical" onFinish={onFinish}>
                <Row gutter={10}>
                    <Col xs={24} md={12}>
                        <Form.Item<ICardRecharge> label="Tên thẻ" name="label">
                            <Input placeholder="Tên thẻ" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item<ICardRecharge> label="Loại thẻ" name="type">
                            <Input placeholder="Loại thẻ" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item<ICardRecharge> label="Trạng thái" name="status">
                            <Select
                                options={[
                                    { value: true, label: 'Hoạt động' },
                                    { value: false, label: 'Bảo trì' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item<ICardRecharge> label="Duyệt thẻ" name="isAuto">
                            <Select
                                options={[
                                    { value: true, label: 'Tự động' },
                                    { value: false, label: 'Thủ công' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item<ICardRecharge> label="Bảng giá" name="autoFeeUpdate">
                            <Select
                                options={[
                                    { value: true, label: 'Tự động' },
                                    { value: false, label: 'Thủ công' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item<ICardRecharge> label="Loại thẻ" name="type">
                            <Input placeholder="Loại thẻ" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};
export default AddCardModal;
