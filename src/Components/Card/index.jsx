/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import Icons from "../Icons";
import NoImage from "../../Assests/Images/no-image-found-360x250.png";

import "./index.scss";
import { cartConstant } from "../../Constant";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPrice: {},
    };
  }
  componentDidMount() {
    this.getPrice();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedCurrency.label !== this.props.selectedCurrency.label
    ) {
      this.getPrice();
    }
  }
  getPrice = () => {
    let selectedPrice = this.props.product.prices.find(
      (price) => price.currency.label === this.props.selectedCurrency.label
    );
    this.setState({ selectPrice: selectedPrice });
  };
  addToCart = (event) => {
    event.preventDefault();
    // here i am creating initial attributes and then  i check if eny product has the same id and then check if it has the same attributes
    // and then if it have the same attributes i save the index of the product and then breack
    // after that i check the productIndex value if null add new product if not increase the amount
    let cartClone = [...this.props.cart];
    let initialAttributes = {};
    this.props.product.attributes.forEach((attribute) => {
      initialAttributes = {
        ...initialAttributes,
        [attribute.id]: attribute.items[0].id,
      };
    });
    let productIndex = null;
    cartClone.forEach((product, index) => {
      if (product.productId === this.props.product.id) {
        let sameAttributesFlag = true;
        Object.keys(product.attributes).forEach((key) => {
          if (product.attributes[key] !== initialAttributes[key]) {
            sameAttributesFlag = false;
          }
        });
        if (sameAttributesFlag) {
          productIndex = index;
        }
      }
    });

    if (productIndex !== null) {
      let selectedProduct = cartClone[productIndex];
      selectedProduct.amount = selectedProduct.amount + 1;
      cartClone[productIndex] = selectedProduct;
    } else {
      let productObj = {
        id: new Date(),
        productId: this.props.product.id,
        product: this.props.product,
        amount: 1,
        attributes: initialAttributes,
      };
      cartClone = [...this.props.cart, productObj];
    }
    this.props.adjustCart(cartClone);
  };
  render() {
    return (
      <div className={`card-cont`}>
        <img
          src={this.props.product.gallery[0] ?? NoImage}
          alt={this.props.product.name}
        />
        {!this.props.product.inStock ? (
          <div className='card-cont__outOfStock'> OUT OF STOCK</div>
        ) : (
          <button onClick={(event) => this.addToCart(event)}>
            <Icons iconName='greenCart' />
          </button>
        )}

        <span>{this.props.product.name} </span>
        <label>
          {this.state.selectPrice?.currency?.symbol}
          {this.state.selectPrice?.amount}
        </label>
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
export default connect(mapStateToProps, mapDispatchToProps)(Card);
