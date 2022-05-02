/** @format */

import React, { Component } from "react";
import "./index.scss";
export default class Attributes extends Component {
  render() {
    let { attribute, getAttributes, selectedAttributes, inStock } = this.props;
    return (
      <div className='attribute'>
        <h5
          className={`attribute__title  ${
            this.props.header && "attribute__title--headerCustomStyle"
          }`}>
          {attribute.name}:
        </h5>

        <div
          className={`attribute__items ${
            !inStock && "attribute__items--notAllowed"
          }`}>
          {attribute.items.map((item, index) =>
            attribute.type === "swatch" ? (
              <div
                key={item.value + index}
                className={`attribute__items__swatch ${
                  selectedAttributes[attribute.id] === item.id &&
                  "attribute__items__swatch--selectedItem"
                }  ${
                  this.props.header &&
                  "attribute__items__swatch--headerCustomStyle"
                }`}
                style={{ backgroundColor: item.value }}
                onClick={() => getAttributes(attribute, item)}></div>
            ) : (
              <div
                key={item.value + index}
                className={`attribute__items__text ${
                  selectedAttributes[attribute.id] === item.id &&
                  "attribute__items__text--selectedItem"
                }  ${
                  this.props.header &&
                  "attribute__items__text--headerCustomStyle"
                }`}
                onClick={() => getAttributes(attribute, item)}>
                {item.value}
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
