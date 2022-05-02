/** @format */

import React, { Component } from "react";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import { LOAD_CATEGORY } from "../../GraphQl/Queries";
import Home from "./index";

class HomeQuery extends Component {
  render() {
    return (
      <Query
        query={LOAD_CATEGORY}
        variables={{
          input: {
            title: window.location.pathname.replace("/", ""),
          },
        }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;

          return <Home category={data.category} />;
        }}
      </Query>
    );
  }
}
const mapStateToProps = (state) => {
  const { selectedCategory } = state.data;

  return { selectedCategory };
};
export default connect(mapStateToProps)(HomeQuery);
