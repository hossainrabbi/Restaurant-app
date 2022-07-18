import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import { useMenuContext } from '../../../contexts/MenuContext';
import { menuData, productReviewData, userData } from '../../../data';
import Layout from '../../Layout';
import ReviewDetails from '../../ReviewDetails/ReviewDetails';
import Title from '../../Title/Title';
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

  const reviews = productReviewData.filter((item) => item.menuId === id);
  let ratting = 0;
  for (let i = 0; i < reviews.length; i++) {
    ratting += reviews[i].ratting;
  }

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
              <span>
                <Rating
                  initialRating={Math.round(ratting / reviews.length) || 0}
                  readonly={true}
                  fullSymbol={<FaStar className="main__color" />}
                  emptySymbol={<FaStar className="gray__color" />}
                />
              </span>
              {reviews.length > 0 ? (
                <a href="#reviews" className="mt-1 ms-2 link__hover">
                  (reviews: {reviews.length})
                </a>
              ) : (
                <span className="mt-1 ms-2">(reviews: {reviews.length})</span>
              )}
            </div>
            <div className="d-flex align-items-center gap-5 mb-2">
              <h4 className={styles.price}>
                Price: <span>${findMenu.price}</span>
              </h4>
              {findMenu.inStock - qty > 0 ? (
                <span className="stock__green">
                  In Stock: {findMenu.inStock - qty}
                </span>
              ) : (
                <span className="stock__red">
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
      <div className="mt-4 mb-5">
        {findMenu.description.slice(1).map((value, i) => (
          <p key={i}>{value}</p>
        ))}
      </div>
      {reviews.length > 0 && (
        <div id="reviews">
          <Title
            title="Customer Reviews"
            description="It's through mistakes that you actually can grow you get rid of essential to makihave to get bad."
          />
          {reviews.map((reviewItem) =>
            userData.map(
              (userItem) =>
                reviewItem.userId === userItem.id && (
                  <ReviewDetails
                    key={userItem.id}
                    reviewItem={reviewItem}
                    userItem={userItem}
                  />
                )
            )
          )}
        </div>
      )}
    </Layout>
  );
}
