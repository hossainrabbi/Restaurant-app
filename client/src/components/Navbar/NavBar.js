import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { navData } from '../../data';
import FOOD_LOGO from '../../images/FOOD_LOGO.png';
import styles from './Navbar.module.css';

export default function NavBar() {
  const activeStyle = {
    textDecoration: 'underline solid #e68a00 1px',
    color: '#e68a00',
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/" className={styles.navbar__logo}>
          <img src={FOOD_LOGO} alt="FOOD_LOGO" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.navbar__nav} ms-auto`}>
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
          </Nav>
          <div>
            <span className={`${styles.cart__icon} btn position-relative`}>
              <AiOutlineShoppingCart />
              <span className={styles.cart__number}>5</span>
            </span>
            <button className="btn main__bg ms-2">Login</button>
            <button className="btn main__bg ms-2">Signup</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
