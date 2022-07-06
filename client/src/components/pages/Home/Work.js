import { Col, Container, Row } from 'react-bootstrap';
import { workData } from '../../../data';
import Title from '../../Title';
import ActivityCart from './ActivityCart/ActivityCart';

export default function Work() {
  return (
    <Container className="py-5">
      <Title
        title="How It Work"
        description="It's through mistakes that you actually can grow you get rid of
          everything that is not essential to makihave to get bad."
      />
      <Row>
        {workData.map((item) => (
          <Col md={4} key={item.name}>
            <ActivityCart {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
