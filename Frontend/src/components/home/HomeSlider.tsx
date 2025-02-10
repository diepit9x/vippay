import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Container, Row, Col, Button } from "react-bootstrap";

const BannerSlider = () => {
  const slides = [
    {
      title: "Tích hợp API",
      desc: "Hệ thống cung cấp và xử lý API Nạp Thẻ Cào cho các shop game, shop online v.v. Cam kết ổn định trong suốt quá trình sử dụng hệ thống.",
      image: "/storage/userfiles/images/slider/Rl7bork.png",
      link: "#"
    },
    {
      title: "Rút tiền, nạp tiền tự động",
      desc: "Ưu đãi rút tiền nạp tiền tự động. Hỗ trợ rút tiền về tất cả các ngân hàng và ví điện tử Momo miễn phí. Hỗ trợ rút tiền 24/7",
      image: "/storage/userfiles/images/slider/sNjblGz.png",
      link: "#"
    }
  ];

  return (
    <div className="section-banner">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={slides.length > 1}
        pagination={slides.length > 1}
        autoplay={slides.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
        loop={slides.length > 1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="order-2 order-md-1">
                  <h3 className="section-banner_title">{slide.title}</h3>
                  <p className="section-banner_desc">{slide.desc}</p>
                  <div className="section-banner_button">
                    <Button variant="light" className="font-weight-bold px-4" href={slide.link}>
                      Tìm hiểu thêm
                    </Button>
                  </div>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                  <div className="section-banner_image">
                    <a href={slide.link} className="d-inline-block">
                      <img src={slide.image} alt={slide.title} className="img-fluid" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
