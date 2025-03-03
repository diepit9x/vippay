import { Alert, Col, Row } from 'antd';
import { Container } from 'react-bootstrap';
import CardPurchaseCart from './cart/CardPurchaseCart';
import CardTypeAndValue from './selection/CardTypeAndValue';

const CardPurchaseSelection = () => {
    return (
        <Container className="mb-3">
            <div className="description">
                <div className="text-center title">Mua Thẻ Cào</div>
            </div>
            <div className="alertExchange mb-3">
                <Alert
                    description="Các loại thẻ cào điện thoại, thẻ game trực tuyến, hỗ trợ thanh toán bằng ví điện tử, các ngân hàng của Việt Nam, thẻ Visa/Master. Sau khi thanh toán thành công, thẻ sẽ đc trả ngay lập tức trên website và gửi vào điạ chỉ email của bạn."
                    type="info"
                />
            </div>
            <Row>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <CardTypeAndValue />
                </Col>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <CardPurchaseCart />
                </Col>
            </Row>
        </Container>
    );
};
export default CardPurchaseSelection;
