import { Col, Container, Row } from 'react-bootstrap';
import { activityData } from '../../../data';
import Cart from './Cart';

export default function Activity() {
  return (
    <Container className="activity__area py-5">
      <Row>
        {activityData.map((activity) => (
          <Col md={4} key={activity.name}>
            <Cart {...activity} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
