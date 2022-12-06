import { Col, Row } from 'react-bootstrap';
import './Content.css';

export default function Content() {
  return (
    <div className="Content">
      <Row>
        <Col xs={12}>
            <img src='/img/coral-splash.jpg' alt="splash image, source: https://unsplash.com/photos/0G01UI1MQhg" />
        </Col>
        <Col xs={12} sm={6}>
            <h1>What is Coral?</h1>
        </Col>
        <Col xs={12} sm={6}>
            <img src='#' alt="dog image" />
        </Col>
      </Row>
    </div>
  );
  }