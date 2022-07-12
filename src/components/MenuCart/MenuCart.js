import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './MenuCart.module.css';
import Rating from 'react-rating';
import { productReviewData } from '../../data';

export default function MenuCart({
  id,
  name,
  title,
  description,
  price,
  numOfReview,
  image,
  cart,
  inStock,
  handleAddToCart,
  handleRemoveToCart,
}) {
  const navigate = useNavigate();
  const handleNavigateMenuDetailsPage = () => {
    navigate(`/menu/${id}`);
  };

  const reviews = productReviewData.filter((item) => item.menuId === id);
  let ratting = 0;
  for (let i = 0; i < reviews.length; i++) {
    ratting += reviews[i].ratting;
  }

  return (
    <article className={`${styles.menu__cart} shadow-sm rounded-3 mb-4`}>
      <div
        className={`${styles.cart__image} mb-0 cursor__pointer`}
        onClick={handleNavigateMenuDetailsPage}
      >
        <img className="w-100" src={image} alt={name} />
      </div>
      <div className={styles.cart__content}>
        <div
          className="p-3 cursor__pointer"
          onClick={handleNavigateMenuDetailsPage}
        >
          <h4 className="d-flex justify-content-between align-items-center mb-0">
            <span>{name}</span>
            <span>${price}</span>
          </h4>
          <p className="mb-2">
            <small>{title}</small>
          </p>
          <p className="mb-0">
            {description[0]?.length > 120
              ? `${description[0]?.slice(0, 120)}...`
              : description[0]}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center ps-3">
          <div className="d-flex justify-content-between align-items-center">
            <span>
              <Rating
                initialRating={Math.round(ratting / reviews.length) || 0}
                readonly={true}
                fullSymbol={<FaStar className="main__color" />}
                emptySymbol={<FaStar className="gray__color" />}
              />
            </span>
            <span className="mt-1 ms-2">({reviews.length})</span>
          </div>
          {cart.some((item) => item.id === id) ? (
            <button
              className={`${styles.cart__btn} main__bg btn rounded-0 py-2 px-3`}
              onClick={() => handleRemoveToCart(id)}
            >
              <FaMinus />
            </button>
          ) : (
            <button
              className={`${styles.cart__btn} main__bg btn rounded-0 py-2 px-3`}
              onClick={() => handleAddToCart(id)}
              disabled={inStock <= 0}
            >
              <FaPlus />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
