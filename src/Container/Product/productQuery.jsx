/** @format */

import React, { Component } from "react";
import Product from "./index";
import { Query } from "react-apollo";
import { LOAD_PRODUCT } from "../../GraphQl/Queries";

export default class productQuery extends Component {
  render() {
    return (
      <section className='product-cont'>
        {/* <Header /> */}
        <Query
          query={LOAD_PRODUCT}
          variables={{ id: window.location.pathname.replace("/product/", "") }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Error :(</p>;

            return <Product product={data.product} />;
          }}
        </Query>
      </section>
    );
  }
}
