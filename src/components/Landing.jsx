import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import handoutsData from '../data/handouts.js';
import '../styles/Landing.css';

const imageMap = {
  acne: '/images/acne.avif',
  accutane: '/images/accutane.webp',
};

export default function Landing() {
  const handouts = handoutsData.handouts || [];

  return (
    <div className="landing-hero">
      <Container>
        <div className="text-center mb-5 pt-5">
          <h1 className="landing-title">Patient Handouts</h1>
          <p className="landing-subtitle">
            Evidence-based dermatology resources for patients
          </p>
        </div>

        <Row className="g-4 justify-content-center pb-5">
          {handouts.map((h, i) => (
            <Col key={h.id} xs={12} sm={6} lg={5} className="d-flex">
              <Link to={`/${h.id}`} className="text-decoration-none d-flex w-100">
                <Card
                  className="handout-card-animated w-100"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="card-img-wrapper">
                    <Card.Img
                      variant="top"
                      src={imageMap[h.id] || '/images/default.jpg'}
                      alt={h.title}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold text-uppercase">
                      {h.title}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {h.description}
                    </Card.Text>
                    <span className="card-link-text">
                      Read handout &rarr;
                    </span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
