import { Col, Row } from 'react-bootstrap';
import { useMenuContext } from '../../../contexts/MenuContext';
import { menuData } from '../../../data';
import MenuCart from '../../MenuCart/MenuCart';
import Title from './Title/Title';

export default function Menu() {
  const { menuState, menuDispatch } = useMenuContext();

  const handleAddToCart = (id) => {
    menuDispatch({
      type: 'ADD_TO_CART',
      payload: { ...menuData.find((item) => item.id === id), qty: 1 },
    });
  };

  const handleRemoveToCart = (id) => {
    menuDispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  return (
    <section className="py-5">
      <Title
        title="Explore Our Best Menu"
        description="It's through mistakes that you actually can grow you get rid of essential to makihave to get bad."
      />
      <Row className="mt-4">
        {menuData.map((item) => (
          <Col md={4} key={item.id}>
            <MenuCart
              handleAddToCart={handleAddToCart}
              handleRemoveToCart={handleRemoveToCart}
              cart={menuState.cart}
              {...item}
            />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn main__bg px-4 py-2 rounded-pill">
          See More
        </button>
      </div>
    </section>
  );
}
