import styles from './ActivityCart.module.css';

export default function Cart({ name, description, icon: Icon, image }) {
  return (
    <article className={`${styles.activity__cart} shadow-sm p-4`}>
      {image ? (
        <span className={styles.cart__image}>
          <img src={image} alt={name} />
        </span>
      ) : (
        <span className={styles.cart__icon}>
          <Icon />
        </span>
      )}
      <h6 className="mb-0 mt-2">{name}</h6>
      <p className="mb-0">
        <small>{description}</small>
      </p>
    </article>
  );
}
