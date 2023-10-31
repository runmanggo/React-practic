import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { cartActions } from "../redux/slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { createAction } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No iteam added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <h6 className="d-flex align-items-center justify-content-between">
                SubTotal
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </h6>
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/checkout">Check out</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <Link to={`/shop/${item.id}`}>
          <img src={item.imgUrl} alt="" />
        </Link>
      </td>
      <td>{item.productName}</td>
      <Link to={`/shop/${item.id}`}>{item.productName}</Link>
      <td>{item.quantity}</td>
      <td>
        <i onClick={deleteProduct} className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
