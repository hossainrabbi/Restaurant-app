import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMenuContext } from '../../../contexts/MenuContext';
import Layout from '../../Layout';
import styles from './Cart.module.css';

export default function Cart() {
  const {
    menuState: { cart },
    menuDispatch,
  } = useMenuContext();

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

  const subTotal = cart.reduce(
    (acc, curr) => acc + parseFloat(curr.price) * parseInt(curr.qty),
    0
  );

  const shipping = cart.length * 2;

  return (
    <Layout>
      {cart.length > 0 ? (
        <Row>
          <Col md={7}>
            <Table bordered className={`${styles.table} mt-4`}>
              <thead>
                <tr>
                  <th>Menu Image</th>
                  <th>Menu Name</th>
                  <th>In Stock</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Sub Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <tr key={cartItem.id}>
                    <td>
                      <img
                        style={{ height: '50px', width: 100 }}
                        src={cartItem.image}
                        alt={cartItem.name}
                      />
                    </td>
                    <td>
                      <Link to={`/menu/${cartItem.id}`}>{cartItem.name}</Link>
                    </td>
                    <td
                      className={
                        cartItem.inStock - cartItem.qty > 0
                          ? 'stock__green'
                          : 'stock__red'
                      }
                    >
                      {cartItem.inStock - cartItem.qty > 9 ||
                      cartItem.inStock - cartItem.qty < 0
                        ? cartItem.inStock - cartItem.qty
                        : `0${cartItem.inStock - cartItem.qty}`}
                    </td>
                    <td>
                      <strong>${cartItem.price}</strong>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn main__bg px-2 py-0"
                          onClick={() => handleDecrementQty(cartItem.id)}
                          disabled={cartItem.qty <= 1}
                        >
                          -
                        </button>
                        <span className="btn px-1 py-0">{cartItem.qty}</span>
                        <button
                          onClick={() => handleIncrementQty(cartItem.id)}
                          className="btn main__bg px-2 py-0"
                          disabled={cartItem.qty >= cartItem.inStock}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>
                        ${Math.round(cartItem.price * cartItem.qty)}
                      </strong>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveItem(cartItem.id)}
                        className="btn red__color px-2 py-0"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table bordered className="mt-4">
              <thead>
                <tr>
                  <th>Text</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Sub Total:</th>
                  <th className="text-right">${subTotal.toFixed(2)}</th>
                </tr>
                <tr>
                  <th>Shipping:</th>
                  <th className="text-right">${shipping}</th>
                </tr>
                <tr>
                  <th>Total:</th>
                  <th className="text-right">
                    ${(subTotal + shipping).toFixed(2)}
                  </th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      ) : (
        <div className="text-center mt-4">Data Not Found</div>
      )}
    </Layout>
  );
}
