import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { navData } from '../data';
import FOOD_LOGO from '../images/FOOD_LOGO.png';

export default function NavBar() {
  const activeStyle = {
    textDecoration: 'underline solid #484848 1px',
  };

  return (
    <Navbar className="navbar__nav" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={FOOD_LOGO} alt="FOOD_LOGO" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navData.map(({ name, url }) => (
              <NavLink
                className="nav-link mx-2"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={url}
                key={name}
              >
                {name}
              </NavLink>
            ))}
          </Nav>
          <div>
            <span className="btn position-relative">
              <AiOutlineShoppingCart />
              <span className="cart__number">5</span>
            </span>
            <button className="btn  main__bg ms-2">Login</button>
            <button className="btn  main__bg ms-2">Signup</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
