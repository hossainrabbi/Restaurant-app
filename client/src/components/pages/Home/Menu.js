import { Col, Container, Row } from 'react-bootstrap';
import { menuData } from '../../../data';
import Title from '../../Title';
import MenuCart from './MenuCart';

export default function Menu() {
  return (
    <Container className="py-5">
      <Title
        title="Explore Our Best Menu"
        description="It's through mistakes that you actually can grow you get rid of essential to makihave to get bad."
      />
      <Row className="mt-4">
        {menuData.map((item) => (
          <Col md={4} key={item.id}>
            <MenuCart {...item} />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn main__bg">See More</button>
      </div>
    </Container>
  );
}
