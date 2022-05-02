/** @format */

import React, { Component } from "react";

import { Query } from "react-apollo";
import { LOAD_CURRENCY_LOAD_CATEGORIES_NAMES } from "../../GraphQl/Queries";
import Header from "./index";

export default class HeaderQuery extends Component {
  render() {
    return (
      <Query query={LOAD_CURRENCY_LOAD_CATEGORIES_NAMES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;

          return <Header data={data} {...this.props} />;
        }}
      </Query>
    );
  }
}
