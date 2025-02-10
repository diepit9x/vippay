import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import "@/styles/ProviderSlider.scss";

const cards = [
  { title: "Viettel", img: "public/storage/userfiles/images/thecao/the-viettel.png", link: "card/the-viettel.html" },
  { title: "Vinaphone", img: "public/storage/userfiles/images/thecao/the-vinaphone.png", link: "card/the-vinaphone.html" },
  { title: "Zing", img: "public/storage/userfiles/images/thecao/the-zing.png", link: "card/the-zing.html" },
  { title: "Garena", img: "public/storage/userfiles/images/thecao/the-garena.png", link: "card/the-garena.html" },
  { title: "Vcoin", img: "public/storage/userfiles/images/thecao/the-vcoin.png", link: "card/the-vcoin.html" },
  { title: "Zing", img: "public/storage/userfiles/images/thecao/the-zing.png", link: "card/the-zing.html" },
  { title: "Garena", img: "public/storage/userfiles/images/thecao/the-garena.png", link: "card/the-garena.html" },
  { title: "Vcoin", img: "public/storage/userfiles/images/thecao/the-vcoin.png", link: "card/the-vcoin.html" }
];

const ProviderSlider = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 8 } },
      { breakpoint: 991, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } }
    ]
  };

  return (
    <div className="section-gap">
      <Container>
        <div className="description mb-3">
          <div className="text-center title">Đối tác</div>
        </div>
        <Slider {...settings} className="card-slider">
          {cards.map((card, index) => (
            <div key={index} className="card-product-container">
              <a className="card-product card">
                <div className="card-image">
                  <img src={card.img} alt={card.title} />
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ProviderSlider;
