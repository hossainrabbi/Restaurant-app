import { Col, Row } from 'react-bootstrap';
import FOOD_HERO from '../../../images/food-1.png';

export default function Hero() {
  return (
    <section className="mt-4">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Your Favorite Food Delivered Hot &amp; Fresh</h1>
          <p>
            Healthy switcher chefs do all the prep work, like peeding, chopping
            &amp; marinating, so you can cook a fresh food.
          </p>
          <button className="btn rounded-pill px-4 py-2 main__bg">
            Order Now
          </button>
        </Col>
        <Col md={6}>
          <div>
            <img src={FOOD_HERO} alt="FOOD_HERO" />
          </div>
        </Col>
      </Row>
    </section>
  );
}
