import { Col, Row } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import ABOUT_IMAGE from '../../../images/food-2.png';

export default function About() {
  return (
    <section className="py-5 mt-4">
      <Row>
        <Col md={6}>
          <div>
            <img src={ABOUT_IMAGE} alt="ABOUT_IMAGE" />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h2>Food is an Important Part Of a Balanced Diet</h2>
            <p>
              They actually assured me over and over that take little time off
              and come back and work. Fast forward tow weeks after. <br /> we
              are going for a new project. <br />
              <br />I wrote to let them know ready to come back they kicked me
              of their team slack all of us are make company email.
            </p>
            <div className="pt-2">
              <button className="btn rounded-pill px-4 py-2 main__bg">
                Order Now
              </button>
              <button className="btn rounded-pill px-2 py-1 white__bg ms-2">
                <span className="d-flex align-items-center">
                  <span className="icon">
                    <FaPlay />
                  </span>
                  <span className="ms-2">Watch Video</span>
                </span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
