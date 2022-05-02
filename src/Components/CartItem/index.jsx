/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { cartConstant } from "../../Constant";
import Attributes from "../AttributesItem";
import Icons from "../Icons";
import "./index.scss";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { imgIndex: 0 };
  }
  getPrice = (prices) => {
    let priceObj = prices?.find(
      (price) => price.currency.label === this.props.selectedCurrency.label
    );
    return priceObj?.currency?.symbol + priceObj?.amount;
  };
  getAttributes = (attribute, item) => {
    if (!this.props.header) {
      let productObjClone = { ...this.props.productObj };
      let cartClone = [...this.props.cart];
      productObjClone.attributes = {
        ...productObjClone.attributes,
        [attribute.id]: item.id,
      };

      cartClone[this.props.index] = productObjClone;
      this.props.adjustCart(cartClone);
    }
  };
  increaseAmount = () => {
    let productObjClone = { ...this.props.productObj };
    let cartClone = [...this.props.cart];
    productObjClone.amount = productObjClone.amount + 1;
    cartClone[this.props.index] = productObjClone;
    this.props.adjustCart(cartClone);
    this.props.getTotalPrice(cartClone);
  };
  decreaseAmount = () => {
    let productObjClone = { ...this.props.productObj };
    let cartClone = [...this.props.cart];
    productObjClone.amount = productObjClone.amount - 1;
    if (productObjClone.amount === 0) {
      cartClone.splice(this.props.index, 1);
    } else {
      cartClone[this.props.index] = productObjClone;
    }
    this.props.adjustCart(cartClone);
    this.props.getTotalPrice(cartClone);
  };
  nextImg = () => {
    if (
      this.state.imgIndex ===
      this.props.productObj.product.gallery.length - 1
    ) {
      this.setState({ imgIndex: 0 });
    } else {
      this.setState({ imgIndex: this.state.imgIndex + 1 });
    }
  };
  prevImg = () => {
    if (this.state.imgIndex === 0) {
      this.setState({
        imgIndex: this.props.productObj.product.gallery.length - 1,
      });
    } else {
      this.setState({ imgIndex: this.state.imgIndex - 1 });
    }
  };
  render() {
    return (
      <div
        className={`cart-item ${
          this.props.header && "cart-item--headerCustomStyle"
        }`}>
        <div className='cart-item__info'>
          {window.location.pathname === "/cart" ? (
            <h3>{this.props.productObj?.product?.brand}</h3>
          ) : null}
          <span>{this.props.productObj?.product?.name}</span>
          <span>{this.getPrice(this.props.productObj?.product?.prices)}</span>

          {this.props.productObj?.product.attributes.map((attribute, index) => (
            <Attributes
              attribute={attribute}
              getAttributes={this.getAttributes}
              selectedAttributes={this.props.productObj.attributes}
              header={this.props.header}
              key={attribute.id + index}
              inStock={this.props.header ? false : true}
            />
          ))}
        </div>
        <div className='cart-item__amount-img'>
          <div className='cart-item__amount-img__amount'>
            <Icons iconName='add' action={this.increaseAmount} />
            <span>{this.props.productObj.amount}</span>
            <Icons iconName='remove' action={this.decreaseAmount} />
          </div>
          <div
            className={`cart-item__amount-img__image ${
              this.props.header &&
              "cart-item__amount-img__image--headerCustomStyle"
            }`}>
            <img
              src={this.props.productObj.product.gallery[this.state.imgIndex]}
            />
            {this.props.header ||
            this.props.productObj.product.gallery.length === 1 ? null : (
              <div className='cart-item__amount-img__image__arrows'>
                <Icons iconName='leftArrow' action={this.prevImg} />
                <Icons iconName='rightArrow' action={this.nextImg} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { selectedCurrency } = state.data;
  const { cart } = state.cart;
  return {
    selectedCurrency,
    cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    adjustCart: (data) =>
      dispatch({ type: cartConstant.ADJUST_PRODUCT, data: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
