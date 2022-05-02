/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import Icons from "../Icons";
import "./index.scss";
import { dataConstant } from "../../Constant";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurrencies: false,
      showCart: false,
      totalPrice: 0,
      quantity: 0,
    };
    this.cartRef = React.createRef();
    this.currencyRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    // here i get the tot
    this.getTotalPrice(this.props.cart);
    document.addEventListener("mousedown", this.handleClickOutside);
    if (!this.props.selectedCategory.id) {
      let categoryName =
        this.props.selectedProduct.category ??
        window.location.pathname.replace("/", "");
      this.props.selectCategory(categoryName);
    }
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
    if (prevProps.selectedProduct !== this.props.selectedProduct) {
      this.props.selectCategory(this.props.selectedProduct.category);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
  };
  handleClickOutside(event) {
    if (this.currencyRef && !this.currencyRef.current.contains(event.target)) {
      this.setState({ showCurrencies: false });
    }
    if (this.cartRef && !this.cartRef.current.contains(event.target)) {
      this.setState({ showCart: false });
      document.body.style.overflow = "auto";
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
  showCart = () => {
    if (this.props.cart.length) {
      this.setState({ showCart: !this.state.showCart });

      document.body.style.overflow = "hidden";
    }
  };
  render() {
    return (
      <header className='header-cont'>
        {this.state.showCart && this.props.cart.length ? (
          <div className='header-cont__shadow' />
        ) : null}

        <div>
          {this.props.data.categories.map((category, index) => (
            <Link
              to={`/${category.name}`}
              key={category.name}
              className={`header-cont__link ${
                (window.location.pathname.replace("/", "") === category.name ||
                  this.props.selectedCategory === category.name) &&
                "header-cont__link--selectedCategory"
              } `}
              onClick={() => this.props.selectCategory(category.name)}>
              {category.name}
            </Link>
          ))}
        </div>
        <Icons iconName='logo' />
        <div className='header-cont__cart-currency'>
          <div
            className='header-cont__cart-currency__currency'
            onClick={() =>
              this.setState({
                showCurrencies: !this.state.showCurrencies,
              })
            }
            ref={this.currencyRef}>
            <span className='header-cont__cart-currency__currency__symbol'>
              {this.props.selectedCurrency.symbol}
            </span>{" "}
            <Icons
              iconName={this.state.showCurrencies ? "upArrow" : "downArrow"}
              className='header-cont__cart-currency__currency__arrow'
            />
            <div
              className={`header-cont__cart-currency__currency__dropDown ${
                !this.state.showCurrencies &&
                "header-cont__cart-currency__currency__dropDown--hidden"
              }`}>
              {this.props.data.currencies.map((currency) => (
                <div
                  key={currency.label}
                  onClick={() => this.props.selectCurrency(currency)}>
                  {currency.symbol} {currency.label}{" "}
                </div>
              ))}
            </div>
          </div>
          <div className='header-cont__cart-currency__cart' ref={this.cartRef}>
            <Icons iconName='cart' action={() => this.showCart()} />
            {this.props.cart.length ? (
              <>
                <div className='header-cont__cart-currency__cart__counter'>
                  {this.props.cart.length}
                </div>

                <div
                  className={`header-cont__cart-currency__cart__dropDown ${
                    !this.state.showCart &&
                    "header-cont__cart-currency__cart__dropDown--hidden"
                  }`}>
                  <span>
                    <b>My Bag</b>, {this.state.quantity} items
                  </span>
                  {this.props.cart.map((productObj, index) => (
                    <CartItem
                      productObj={productObj}
                      key={productObj.id}
                      header
                      index={index}
                      getTotalPrice={this.getTotalPrice}
                    />
                  ))}
                  <div className='header-cont__cart-currency__cart__dropDown__total-price'>
                    <span>Total</span>
                    <span>
                      {this.props.selectedCurrency.symbol}
                      {this.state.totalPrice}
                    </span>
                  </div>
                  <div className='header-cont__cart-currency__cart__dropDown__footer'>
                    <Link to='/cart'>
                      <button
                        className='header-cont__cart-currency__cart__dropDown__footer__view-bag'
                        onClick={() => {
                          this.setState({ showCart: false });
                          document.body.style.overflow = "auto";
                        }}>
                        View bag
                      </button>
                    </Link>
                    <button className='header-cont__cart-currency__cart__dropDown__footer__check-out'>
                      CHECK OUT
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    categoriesNames,
    selectedCurrency,
    selectedCategory,
    selectedProduct,
  } = state.data;
  const { cart } = state.cart;
  return {
    categoriesNames,
    selectedCurrency,
    selectedCategory,
    selectedProduct,
    cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (data) =>
      dispatch({ type: dataConstant.SELECT_CATEGORY, data: data }),
    selectCurrency: (data) =>
      dispatch({ type: dataConstant.SELECT_CURRENCY, data: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
