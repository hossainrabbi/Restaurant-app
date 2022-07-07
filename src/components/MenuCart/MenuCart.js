import { FaPlus } from 'react-icons/fa';
import styles from './MenuCart.module.css';

export default function MenuCart({
  name,
  title,
  description,
  price,
  ratting,
  numOfReview,
  image,
}) {
  return (
    <article className={`${styles.menu__cart} shadow-sm rounded-3 mb-4`}>
      <div className={`${styles.cart__image} mb-0`}>
        <img className="w-100" src={image} alt={name} />
      </div>
      <div className={styles.cart__content}>
        <div className="p-3">
          <h4 className="d-flex justify-content-between align-items-center mb-0">
            <span>{name}</span>
            <span>${price}</span>
          </h4>
          <p className="mb-2">
            <small>{title}</small>
          </p>
          <p className="mb-0">
            {description.length > 120
              ? `${description.slice(0, 120)}...`
              : description}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center ps-3">
          <div>
            <span>ratting - {ratting}</span>
            <span>({numOfReview})</span>
          </div>
          <button
            className={`${styles.cart__btn} main__bg btn rounded-0 py-2 px-3`}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </article>
  );
}
