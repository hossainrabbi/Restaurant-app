import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useMenuContext } from '../../../contexts/MenuContext';
import { menuData } from '../../../data';
import Layout from '../../Layout';
import styles from './MenuDetails.module.css';

export default function MenuDetails() {
  const { id } = useParams();
  const { menuState, menuDispatch } = useMenuContext();
  const findMenu = menuData.find((item) => item.id === id);

  const handleMenuAddToCart = (addId) => {
    menuDispatch({
      type: 'ADD_TO_CART',
      payload: menuData.find((item) => item.id === addId),
    });
  };

  const handleMenuRemoveFromCart = (remId) => {
    menuDispatch({
      type: 'REMOVE_FROM_CART',
      payload: remId,
    });
  };

  if (!findMenu) {
    return <div>not found</div>;
  }

  return (
    <Layout>
      <Row className="align-items-center mt-3">
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
            {menuState.cart.some((item) => item.id === id) ? (
              <button
                className="btn main__bg mb-3"
                onClick={() => handleMenuRemoveFromCart(id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="btn main__bg mb-3"
                onClick={() => handleMenuAddToCart(id)}
              >
                Add to Cart
              </button>
            )}
            <p className="mb-0">{findMenu.description[0]}</p>
          </article>
        </Col>
      </Row>
      <div className="mt-4">
        {findMenu.description.slice(1).map((value, i) => (
          <p key={i}>{value}</p>
        ))}
      </div>
    </Layout>
  );
}
