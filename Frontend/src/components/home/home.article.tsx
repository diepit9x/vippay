import { Card, Col, Row, Container } from "react-bootstrap";
import "@/styles/ArticleList.scss";

const articles = [
  {
    id: 1,
    title: "Bài viết cực kỳ dài để kiểm tra tính năng cắt chữ khi hiển thị tiêu đề",
    description: "Mô tả bài viết này rất dài để test xem có bị cắt bớt hay không, khi đạt giới hạn tối đa dòng thì sẽ bị cắt",
    image: "https://vippay.vn/public/img/vippay-logo.png"
  },
  {
    id: 2,
    title: "Bài viết 2",
    description: "Mô tả bài viết 2",
    image: "https://vippay.vn/public/img/vippay-logo.png"
  },
  {
    id: 3,
    title: "Bài viết 3",
    description: "Mô tả bài viết 3",
    image: "https://vippay.vn/public/img/vippay-logo.png"
  },
  {
    id: 4,
    title: "Bài viết 4",
    description: "Mô tả bài viết 4",
    image: "https://vippay.vn/public/img/vippay-logo.png"
  }
];

const ArticleList = () => {
  return (
    <Container className="mt-4">
      <div className="description mb-3">
        <div className="text-center title">Tin tức</div>
      </div>
      <Row>
        {articles.map((article) => (
          <Col key={article.id} md={3} xs={12} className="mb-4 d-flex">
            <Card className="d-md-block d-flex flex-row align-items-center w-100">
              <Card.Img variant="top" src={article.image} className="article-image" alt={article.title} />
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
