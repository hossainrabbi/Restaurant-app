import { Col, Row } from 'react-bootstrap';
import { activityData } from '../../../data';
import ActivityCart from './ActivityCart/ActivityCart';

export default function Activity({ styles }) {
  return (
    <section className="py-5">
      <Row>
        {activityData.map((activity) => (
          <Col md={4} key={activity.name}>
            <ActivityCart styles={styles} {...activity} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
