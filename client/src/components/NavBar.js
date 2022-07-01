import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { navData } from '../data';
import FOOD_LOGO from '../images/FOOD_LOGO.png';

export default function NavBar() {
  const activeStyle = {
    textDecoration: 'underline solid #484848 1px',
  };

  return (
    <Navbar className="navbar__nav" bg="light" expand="lg">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
