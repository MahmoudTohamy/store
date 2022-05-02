/** @format */

import React, { Component } from "react";

import { cartConstant } from "../../Constant";
import { connect } from "react-redux";
import CartItem from "../../Components/CartItem";
import "./index.scss";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0, quantity: 0 };
  }
  componentDidMount() {
    this.getTotalPrice(this.props.cart);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      this.getTotalPrice(this.props.cart);
    }
    if (
      prevProps.selectedCurrency.symbol !== this.props.selectedCurrency.symbol
    ) {
      this.getTotalPrice(this.props.cart);
    }
  }
  getPrice = (prices) => {
    let priceObj = prices?.find(
      (price) => price.currency.label === this.props.selectedCurrency.label
    );
    return priceObj?.amount;
  };
  getTotalPrice = (cart) => {
    let totalPrice = 0;
    let quantity = 0;
    cart.forEach((productObj) => {
      quantity = quantity + productObj.amount;
      totalPrice =
        totalPrice +
        this.getPrice(productObj.product.prices) * productObj.amount;
    });
    this.setState({ totalPrice: totalPrice.toFixed(2), quantity: quantity });
  };
  render() {
    return (
      <div className='cart-cont'>
        <h2>CART</h2>
        {this.props.cart.map((productObj, index) => (
          <CartItem
            productObj={productObj}
            key={productObj.id}
            index={index}
            getTotalPrice={this.getTotalPrice}
          />
        ))}
        <div className='cart-cont__price-info'>
          <span>
            Tax:
            <b>
              {this.props.selectedCurrency.symbol}
              {(parseFloat(this.state.quantity) * 5).toFixed(2)}
            </b>
          </span>
          <span>
            Qty:<b>{this.state.quantity}</b>
          </span>

          <span>
            Total:
            <b>
              {this.props.selectedCurrency.symbol}
              {parseFloat(this.state.totalPrice).toFixed(2)}
            </b>
          </span>
          <button>ORDER</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { selectedCurrency } = state.data;
  const { cart } = state.cart;
  return { selectedCurrency, cart };
};
const mapDispatchToProps = (dispatch) => {
  return {
    adjustCart: (data) =>
      dispatch({ type: cartConstant.ADJUST_PRODUCT, data: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
