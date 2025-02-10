import { ICard } from '@/models/card/card';
import {
    MinusCircleOutlined,
    PlusCircleOutlined,
    SendOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Alert, Button, Col, Flex, Form, Input, Row, Select } from 'antd';
import { Container } from 'react-bootstrap';

const onFinish = (values: ICard) => {
    console.log('Received values of form:', values);
};

const MultipleForm = () => {
    const [form] = Form.useForm();
    const telcos = [
        { value: 'viettel', label: 'Viettel' },
        { value: 'vinaphone', label: 'Vinaphone' },
        { value: 'mobifone', label: 'Mobifone' },
    ];
    const amounts = [
        { value: '10000', label: '10.000đ' },
        { value: '20000', label: '20.000đ' },
        { value: '30000', label: '30.000đ' },
    ];

    return (
        <Form
            form={form}
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{ cardData: [{}] }}
        >
            <Form.Item>
                <Flex justify="flex-end">
                    <Button
                        size="small"
                        type="dashed"
                        variant="solid"
                        icon={<UploadOutlined />}
                    >
                        Import
                    </Button>
                </Flex>
            </Form.Item>
            <Form.List name="cardData">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row
                                key={key}
                                gutter={[10, 5]}
                                justify="start"
                                style={{ margin: '15px -5px' }}
                            >
                                <Col lg={5} xs={24} style={{ width: '100%' }}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'telco']}
                                        rules={[{ required: true }]}
                                        help=""
                                        validateTrigger="onBlur"
                                    >
                                        <Select
                                            showSearch={true}
                                            placeholder="Loại thẻ"
                                            style={{ width: '100%' }}
                                            optionFilterProp="label"
                                            options={telcos}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={6} xs={12} style={{ width: '100%' }}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'code']}
                                        rules={[{ required: true }]}
                                        help=""
                                        validateTrigger="onBlur"
                                    >
                                        <Input placeholder="Mã thẻ" allowClear={true} />
                                    </Form.Item>
                                </Col>
                                <Col lg={6} xs={12} style={{ width: '100%' }}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'serial']}
                                        rules={[{ required: true }]}
                                        help=""
                                        validateTrigger="onBlur"
                                    >
                                        <Input placeholder="Serial" allowClear={true} />
                                    </Form.Item>
                                </Col>
                                <Col lg={5} xs={19} style={{ width: '100%' }}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'amount']}
                                        rules={[{ required: true }]}
                                        help=""
                                        validateTrigger="onBlur"
                                    >
                                        <Select
                                            showSearch={true}
                                            placeholder="Mệnh giá"
                                            style={{ width: '100%' }}
                                            optionFilterProp="label"
                                            options={amounts}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={2} xs={5} style={{ textAlign: 'right' }}>
                                    {key > 0 ? (
                                        <Button
                                            color="danger"
                                            className="btn btn-error"
                                            variant="solid"
                                            icon={<MinusCircleOutlined />}
                                            style={{ width: '100%' }}
                                            onClick={() => remove(name)}
                                        />
                                    ) : (
                                        <Button
                                            color="primary"
                                            className="btn btn-primary"
                                            variant="solid"
                                            icon={<PlusCircleOutlined />}
                                            style={{ width: '100%' }}
                                            onClick={() => add()}
                                        />
                                    )}
                                </Col>
                            </Row>
                        ))}
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Flex align="center" justify="center">
                    <Button
                        color="primary"
                        size="large"
                        variant="solid"
                        htmlType="submit"
                        className="btn btn-exchange"
                        icon={<SendOutlined />}
                        content="Gửi thẻ cào"
                    >
                        Gửi thẻ cào
                    </Button>
                </Flex>
            </Form.Item>
        </Form>
    );
};

const CardRechargeForm = () => {
    return (
        <Container className="exchangeForm">
            <div className="description mb-3">
                <div className="text-center title">Đổi thẻ cào</div>
            </div>
            <div className="alertExchange mb-3">
                <Alert
                    description="Additional description and information about copywriting."
                    type="info"
                />
            </div>
            <div className="formExchange mb-3">
                <MultipleForm />
            </div>
        </Container>
    );
};

export default CardRechargeForm;
