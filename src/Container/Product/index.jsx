/** @format */

import React, { Component } from "react";

import { connect } from "react-redux";
import NoImage from "../../Assests/Images/no-image-found-360x250.png";
import Attributes from "../../Components/AttributesItem";

import { cartConstant, dataConstant } from "../../Constant";
import "./index.scss";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      selectPrice: {},
      selectedAttributes: {},

      selectedImageIndex: 0,
    };
    this.descriptionRef = React.createRef();
  }
  componentDidMount() {
    if (this.props.product) {
      this.props.saveProduct(this.props.product);
      let initialAttributes = {};
      this.props.product?.attributes?.forEach((attribute) => {
        initialAttributes = {
          ...initialAttributes,
          [attribute.id]: attribute.items[0].id,
        };
      });

      this.setState({
        selectedProduct: this.props.product,
        selectedAttributes: initialAttributes,
      });
      this.getPrice(this.props.product);
    }

    // this.setState({ selectedProduct: this.props.selectedProduct });
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedCurrency.label !== this.props.selectedCurrency.label
    ) {
      this.getPrice(this.state.selectedProduct);
    }
    if (prevProps.selectedProduct.id !== this.props.selectedProduct.id) {
      let initialAttributes = {};
      this.props.selectedProduct.attributes.forEach((attribute) => {
        initialAttributes = {
          ...initialAttributes,
          [attribute.id]: attribute.items[0].id,
        };
      });

      this.setState({
        selectedProduct: this.props.selectedProduct,
        selectedAttributes: initialAttributes,
      });
      this.getPrice(this.props.selectedProduct);
    }
  }

  getPrice = (selectedProduct) => {
    let selectedPrice = selectedProduct.prices?.find(
      (price) => price.currency.label === this.props.selectedCurrency.label
    );
    this.setState({ selectPrice: selectedPrice });
  };

  getAttributes = (attribute, item) => {
    if (this.state.selectedProduct.inStock) {
      this.setState({
        selectedAttributes: {
          ...this.state.selectedAttributes,
          [attribute.id]: item.id,
        },
      });
    }
  };

  addToCart = () => {
    // here i check if eny product has the same id and then check if it has the same attributes
    // and then if it have the same attributes i save the index of the product and then breack
    // after that i check the productIndex value if null add new product if not increase the amount
    let cartClone = [...this.props.cart];

    let productIndex = null;

    cartClone.forEach((product, index) => {
      if (product.productId === this.state.selectedProduct.id) {
        let sameAttributesFlag = true;
        Object.keys(product.attributes).forEach((key) => {
          if (product.attributes[key] !== this.state.selectedAttributes[key]) {
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
        productId: this.state.selectedProduct.id,
        product: this.state.selectedProduct,
        amount: 1,
        attributes: this.state.selectedAttributes,
      };
      cartClone = [...this.props.cart, productObj];
    }
    this.props.adjustCart(cartClone);
  };
  saveProduct = (data) => {
    this.setState({ selectedProduct: data.product });
    this.getPrice(data.product);
  };
  renderInfo = () => {
    return (
      <div className='product-cont__body__info'>
        <h3>{this.state.selectedProduct.brand}</h3>
        <label className='product-cont__body__info__name'>
          {this.state.selectedProduct.name}
        </label>

        {this.state.selectedProduct?.attributes?.map((attribute, index) => (
          <Attributes
            attribute={attribute}
            selectedAttributes={this.state.selectedAttributes}
            getAttributes={this.getAttributes}
            key={attribute.id + index}
            inStock={this.state.selectedProduct.inStock}
          />
        ))}
        <h5 className='product-cont__body__info__price-title'>Price:</h5>
        <span className='product-cont__body__info__price'>
          {this.state.selectPrice?.currency?.symbol}
          {this.state.selectPrice?.amount}
        </span>
        <button
          disabled={!this.state.selectedProduct.inStock}
          onClick={() => this.addToCart()}>
          ADD TO CART
        </button>
        <div
          ref={this.descriptionRef}
          className='product-cont__body__info__description'
        />
      </div>
    );
  };
  render() {
    return (
      <div className='product-cont__body'>
        <div className='product-cont__body__gallery-cont'>
          {this.state.selectedProduct?.gallery?.map((img, index) => (
            <img
              alt={this.props.selectedProduct.name}
              src={img}
              key={index + img}
              onClick={() => this.setState({ selectedImageIndex: index })}
            />
          ))}
        </div>
        <img
          alt={this.props.selectedProduct.name}
          src={
            this.props.selectedProduct?.gallery?.[
              this.state.selectedImageIndex
            ] ?? NoImage
          }
          className='product-cont__body__main-img'
        />

        {this.renderInfo()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { selectedCategory, selectedCurrency, selectedProduct } = state.data;
  const { cart } = state.cart;
  return { selectedCategory, selectedCurrency, cart, selectedProduct };
};
const mapDispatchToProps = (dispatch) => {
  return {
    adjustCart: (data) =>
      dispatch({ type: cartConstant.ADJUST_PRODUCT, data: data }),
    saveProduct: (data) =>
      dispatch({ type: dataConstant.SELECT_PRODUCT, data: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
