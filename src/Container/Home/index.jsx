/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../Components/Card";
import "./index.scss";

import { Link } from "react-router-dom";
import { dataConstant } from "../../Constant";

class Home extends Component {
  componentDidMount() {
    this.props.selectCategory(this.props.category.name);
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.category.name !== this.props.category.name) {
  //     this.props.selectCategory(this.props.category.name);
  //   }
  // }
  render() {
    return (
      <div className='home-cont' id='test'>
        <h4>{this.props.selectedCategory}</h4>
        <div className='home-cont__cards-cont'>
          {this.props.category.products?.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              state={product}>
              <Card product={product} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { categories, selectedCategory } = state.data;

  return { categories, selectedCategory };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (data) =>
      dispatch({ type: dataConstant.SELECT_CATEGORY, data: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
