import { Alert, Col, Row } from 'antd';
import { Container } from 'react-bootstrap';
import TransferForm from '@/components/user/transaction/transfer/element/TransferForm';
import Rule from '@/components/user/transaction/transfer/element/Rule';

const Transfer = () => {
    return (
        <Container className="mb-3">
            <div className="description">
                <div className="text-center title">Chuyển tiền</div>
            </div>
            <div className="alertExchange mb-3">
                <Alert
                    description="Chuyển tiền qua tài khoản khác trong hệ thống"
                    type="info"
                />
            </div>
            <Row gutter={10}>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <TransferForm />
                </Col>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <Rule />
                </Col>
            </Row>
        </Container>
    );
};
export default Transfer;
