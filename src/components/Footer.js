import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navData } from '../data';
import FOOD_LOGO from '../images/FOOD_LOGO.png';

export default function Footer() {
  return (
    <footer className="footer__area pt-5 pb-3 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <Link to="/" className="footer__logo">
              <img src={FOOD_LOGO} alt="FOOD_LOGO" />
            </Link>
            <p className="mt-2">
              All you need to do is download one of the best delivery apps, make
              a and most companies are opting.
            </p>
          </Col>
          <Col md={3}>
            <h6 className="footer__title">Explore</h6>
            {navData.map((item) => (
              <ul key={item.name}>
                <li>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              </ul>
            ))}
          </Col>
          <Col md={3}>
            <h6 className="footer__title">Help</h6>
            {navData.map((item) => (
              <ul key={item.name}>
                <li>
                  <Link to={item.url}>Help {item.name}</Link>
                </li>
              </ul>
            ))}
          </Col>
          <Col md={3}>
            <h6 className="footer__title">Get in touch</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="subscribe__input mt-3">
              <input type="email" />
              <input className="main__bg btn" type="button" value="Subscribe" />
            </div>
          </Col>
        </Row>
        <p className="text-center mb-0 mt-5">
          <small>
            Copyright &copy; {new Date().getFullYear()} Restaurant App
          </small>
        </p>
      </Container>
    </footer>
  );
}
