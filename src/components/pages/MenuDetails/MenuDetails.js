import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { menuData } from '../../../data';
import Layout from '../../Layout';
import styles from './MenuDetails.module.css';

export default function MenuDetails() {
  const { id } = useParams();
  const findMenu = menuData.find((item) => item.id === id);

  if (!findMenu) {
    return <div>not found</div>;
  }

  console.log(findMenu);

  return (
    <Layout>
      <Row className="align-items-center mt-4">
        <Col md={6}>
          <div className={styles.menu__image}>
            <img src={findMenu.image} alt={findMenu.name} />
          </div>
        </Col>
        <Col md={6}>
          <article className={styles.menu__content}>
            <h5>{findMenu.name}</h5>
            <div className="my-2">
              <span>Rating-</span>
              <span>{findMenu.ratting}</span>
            </div>
            <div className="d-flex align-items-center gap-5 mb-2">
              <h4 className={styles.price}>
                Price: <span>${findMenu.price}</span>
              </h4>
              {findMenu.inStock ? (
                <span className={styles.stock__green}>
                  In Stock: {findMenu.inStock}
                </span>
              ) : (
                <span className={styles.stock__red}>
                  In Stock: {findMenu.inStock}
                </span>
              )}
            </div>
            <div className="mb-4">
              <button className="btn main__bg">-</button>
              <span className="btn">5</span>
              <button className="btn main__bg">+</button>
            </div>
            <button className="btn main__bg mb-3">Add to Cart</button>
            <p className="mb-0">{findMenu.description}</p>
          </article>
        </Col>
      </Row>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ipsa sunt incidunt culpa atque reiciendis a nihil explicabo deserunt
          assumenda, quam non distinctio harum temporibus, dolor quo beatae!
          Corporis culpa, quo assumenda voluptate exercitationem, nihil quaerat
          tempore minus dolores tempora magnam, soluta minima ex similique
          deserunt nobis excepturi odio obcaecati recusandae delectus blanditiis
          cum veritatis sapiente perferendis. Accusantium, vitae delectus. Culpa
          enim, molestiae eveniet tenetur minus reprehenderit, molestias
          adipisci ex ab amet iste nobis cum fugit ipsam! Tenetur, pariatur
          numquam eveniet repellendus recusandae beatae quis, dolore qui saepe
          doloremque quia incidunt, dolores at ipsa itaque tempore minus
          asperiores vitae ea.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          laborum, ipsam asperiores maiores, fugiat beatae, hic fuga quas id
          enim architecto! Voluptatibus cum, odio nihil perspiciatis cumque
          sapiente quis impedit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
          cum odio obcaecati fuga! Atque dignissimos, fugiat alias libero
          deserunt dolorem quidem, eveniet tenetur sunt adipisci id doloremque
          dolor dolore eum esse suscipit magnam repellendus! Totam voluptate
          quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
          ullam beatae repellendus eius! Culpa harum sed impedit. Debitis
          exercitationem magni earum atque nesciunt?
        </p>
      </div>
    </Layout>
  );
}
