import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useMenuContext } from '../../contexts/MenuContext';
import { navData } from '../../data';
import FOOD_LOGO from '../../images/FOOD_LOGO.png';
import styles from './Navbar.module.css';

export default function NavBar() {
  const {
    menuState: { cart },
    menuDispatch,
  } = useMenuContext();

  const activeStyle = {
    textDecoration: 'underline solid #e68a00 1px',
    color: '#e68a00',
  };

  const handleRemoveItem = (id) => {
    menuDispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  const handleIncrementQty = (id) => {
    menuDispatch({
      type: 'INCREMENT_QTY',
      payload: id,
    });
  };

  const handleDecrementQty = (id) => {
    menuDispatch({
      type: 'DECREMENT_QTY',
      payload: id,
    });
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/" className={styles.navbar__logo}>
          <img src={FOOD_LOGO} alt="FOOD_LOGO" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.navbar__nav} ms-auto align-items-center`}>
            {navData.map(({ name, url }) => (
              <NavLink
                className="mx-2"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={url}
                key={name}
              >
                {name}
              </NavLink>
            ))}
            <NavDropdown
              title={
                <span className={`${styles.cart__icon} btn position-relative`}>
                  <AiOutlineShoppingCart />
                  <span className={styles.cart__number}>{cart.length}</span>
                </span>
              }
              className={styles.nav__dropdown}
              id="nav-dropdown"
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => (
                    <div
                      className="cart__dropdown__item d-flex justify-content-between align-items-center p-2 border-bottom"
                      key={item.id}
                    >
                      <img src={item.image} alt={item.name} />
                      <strong>${Math.round(item.price * item.qty)}</strong>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn main__bg px-2 py-0"
                          onClick={() => handleDecrementQty(item.id)}
                          disabled={item.qty <= 1}
                        >
                          -
                        </button>
                        <span className="btn px-1 py-0">{item.qty}</span>
                        <button
                          className="btn main__bg px-2 py-0"
                          onClick={() => handleIncrementQty(item.id)}
                          disabled={item.qty >= item.inStock}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn red__color px-2 py-0"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                  <Link
                    to="/cart"
                    className={`${styles.cart__link__hover} text-center p-2 d-block`}
                  >
                    <small>See More Cart Details</small>
                  </Link>
                </>
              ) : (
                <span className="text-center p-2 d-block">No Data Found</span>
              )}
            </NavDropdown>
            <button className="btn main__bg ms-2">Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
