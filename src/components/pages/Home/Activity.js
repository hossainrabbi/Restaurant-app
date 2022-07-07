import { Col, Container, Row } from 'react-bootstrap';
import { activityData } from '../../../data';
import ActivityCart from './ActivityCart/ActivityCart';

export default function Activity({ styles }) {
  return (
    <Container className="py-5">
      <Row>
        {activityData.map((activity) => (
          <Col md={4} key={activity.name}>
            <ActivityCart styles={styles} {...activity} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
