import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FloatButton } from 'antd';
import {
    CustomerServiceOutlined,
    FacebookOutlined,
    WechatOutlined,
} from '@ant-design/icons';

const AppFooter = () => {
    return (
        <footer className="footer bg-light py-4 border-top">
            <Container>
                <Row>
                    <Col md={3}>
                        <div>
                            <strong>VIPPAY.VN</strong>
                            <p>
                                Đại lý thẻ điện thoại, thẻ game trực tuyến, nạp tiền điện
                                thoại. Thanh toán tự động, nhanh chóng và uy tín.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div>
                            <h5>Dịch vụ</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className=" bg-light border-0 p-0">
                                    <a href="card.html" className="text-dark">
                                        Mua mã thẻ
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-light border-0 p-0">
                                    <a href="doithecao.html" className="text-dark">
                                        Đổi thẻ cào
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-light border-0 p-0">
                                    <a href="recharge.html" className="text-dark">
                                        Nạp topup
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div>
                            <h5>Thông tin</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-light border-0 p-0">
                                    <a href="news.html" className="text-dark">
                                        Tin tức
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-light border-0 p-0">
                                    <a href="merchant/list.html" className="text-dark">
                                        Kết nối API
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-light border-0 p-0">
                                    <a href="account/security.html" className="text-dark">
                                        Bảo mật
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h5>Liên hệ</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-light border-0 p-0">
                                    <a href="#" className="text-dark">
                                        <FontAwesomeIcon
                                            icon={faPhoneAlt}
                                            className="me-2"
                                        />{' '}
                                        0984 459 954
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-light border-0 p-0">
                                    <a href="merchant/list.html" className="text-dark">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="me-2"
                                        />{' '}
                                        diepit9x@gmail.com
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FloatButton.Group
                className="custom-float-group"
                trigger="click"
                type="primary"
                style={{ insetInlineEnd: 20 }}
                icon={<CustomerServiceOutlined />}
            >
                <FloatButton icon={<FacebookOutlined />} />
                <FloatButton icon={<WechatOutlined />} />
            </FloatButton.Group>
        </footer>
    );
};

export default AppFooter;
