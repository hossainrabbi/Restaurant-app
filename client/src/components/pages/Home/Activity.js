import { Col, Container, Row } from 'react-bootstrap';
import { activityData } from '../../../data';

export default function Activity() {
  return (
    <Container className="activity__area py-5">
      <Row>
        {activityData.map(({ activity, title, icon: Icon }) => (
          <Col md={4} key={activity}>
            <article className="shadow-sm p-4">
              <span className="icon">
                <Icon />
              </span>
              <h6 className="mb-0 mt-2">{activity}</h6>
              <p className="mb-0">
                <small>{title}</small>
              </p>
            </article>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
