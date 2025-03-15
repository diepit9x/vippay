import { Alert, Col, Row } from 'antd';
import { Container } from 'react-bootstrap';
import Rule from '@/components/user/transaction/withdraw/element/Rule';
import WithdrawForm from '@/components/user/transaction/withdraw/element/WithdrawForm';

const Withdraw = () => {
    return (
        <Container className="mb-3">
            <div className="description">
                <div className="text-center title">Rút tiền</div>
            </div>
            <div className="alertExchange mb-3">
                <Alert description="Rút tiền về ngân hàng hoặc ví điện tử" type="info" />
            </div>
            <Row gutter={10}>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <WithdrawForm />
                </Col>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <Rule />
                </Col>
            </Row>
        </Container>
    );
};
export default Withdraw;
