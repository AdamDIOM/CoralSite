import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
        <Container>
            <Row>
                <Col sm={3} xs={12}>
                    <a href='https://instagram.com/coral.iom' target="_blank">Instagram</a>
                </Col>
                <Col sm={3} xs={12}>
                    <a href='https://facebook.com/coral.iom' target="_blank">Facebook</a>
                </Col>
                <Col sm={3} xs={12}>
                    <a href='http://www.coyc.im' target="_blank">Junior Achievement</a>
                </Col>
                <Col sm={3} xs={12}>
                    <a href="mailto:coralisleofman@gmail.com">Email us!</a>
                </Col>
            </Row>
        </Container>
    </div>
  );
  }