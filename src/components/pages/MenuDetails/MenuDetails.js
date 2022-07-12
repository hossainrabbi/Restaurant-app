import { useState } from 'react';
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
  const menuCartInclude = menuState?.cart?.find((item) => item.id === id);
  const [qty, setQty] = useState(
    menuCartInclude?.qty ? menuCartInclude?.qty : findMenu.inStock > 0 ? 1 : 0
  );

  const handleMenuAddToCart = (addId) => {
    menuDispatch({
      type: 'ADD_TO_CART',
      payload: { ...menuData.find((item) => item.id === addId), qty },
    });
  };

  const handleMenuRemoveFromCart = (remId) => {
    menuDispatch({
      type: 'REMOVE_FROM_CART',
      payload: remId,
    });
  };

  const handleQtyIncrement = () => {
    setQty((prevQty) => {
      if (prevQty < findMenu.inStock) return prevQty + 1;
      return prevQty;
    });
  };

  const handleQtyDecrement = () => {
    setQty((prevQty) => {
      if (prevQty > 0) return prevQty - 1;
      return prevQty;
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
              {findMenu.inStock - qty > 0 ? (
                <span className={styles.stock__green}>
                  In Stock: {findMenu.inStock - qty}
                </span>
              ) : (
                <span className={styles.stock__red}>
                  In Stock: {findMenu.inStock - qty}
                </span>
              )}
            </div>
            {menuState.cart.some((item) => item.id === id) || (
              <div className="mb-4">
                <button
                  className="btn main__bg"
                  onClick={handleQtyDecrement}
                  disabled={qty <= 0}
                >
                  -
                </button>
                <span className="btn">{qty}</span>
                <button
                  className="btn main__bg"
                  onClick={handleQtyIncrement}
                  disabled={findMenu.inStock - qty <= 0}
                >
                  +
                </button>
              </div>
            )}
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
                disabled={findMenu.inStock - qty < 0 || qty <= 0}
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
