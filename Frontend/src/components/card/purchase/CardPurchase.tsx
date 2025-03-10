import { Alert, Col, Row } from 'antd';
import { Container } from 'react-bootstrap';
import Cart from '@/components/card/purchase/element/Cart';
import Selection from '@/components/card/purchase/element/Selection';

const CardPurchase = () => {
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
            <Row gutter={10}>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <Selection />
                </Col>
                <Col sm={24} md={12} style={{ width: '100%' }}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    );
};
export default CardPurchase;
