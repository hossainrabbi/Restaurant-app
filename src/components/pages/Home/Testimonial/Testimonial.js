import { Col, Row } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialData } from '../../../../data';
import CHEF from '../../../../images/chef.jpg';
import Title from '../Title/Title';
import styles from './Testimonial.module.css';

export default function Testimonial() {
  return (
    <section className="py-5">
      <Title
        title="What They are Saying"
        description="It's through mistakes that you actually can grow you get rid of essential to makihave to get bad."
      />
      <Row className="align-items-center mt-3">
        <Col md={6}>
          <div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {testimonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <article>
                    <div className="d-flex align-items-center gap-3">
                      <div className={styles.testimonial__image}>
                        <img
                          className="rounded-circle"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className={styles.testimonial__title}>
                        <h5 className="mb-0">{item.name}</h5>
                        <p className="mb-0">
                          <small>{item.title}</small>
                        </p>
                      </div>
                    </div>
                    <div className={`${styles.testimonial__content} mt-4`}>
                      <p>
                        <span className="me-2">
                          <FaQuoteLeft />
                        </span>
                        <em>{item.review}</em>
                        <span className="ms-2">
                          <FaQuoteRight />
                        </span>
                      </p>
                      <div>rating - {item.rating}</div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <img className="rounded-3 shadow" src={CHEF} alt="CHEF_MAN" />
          </div>
        </Col>
      </Row>
    </section>
  );
}
