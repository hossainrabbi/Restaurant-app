export default function Cart({ name, description, icon: Icon, image }) {
  return (
    <article className="shadow-sm p-4">
      {image ? (
        <span className="cart__image">
          <img src={image} alt={name} />
        </span>
      ) : (
        <span className="icon">
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
