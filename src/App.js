/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductQuery from "./Container/Product/productQuery";

import { Component } from "react";

import Cart from "./Container/Cart";
import HeaderQuery from "./Components/Header/HeaderQuery";
import HomeQuery from "./Container/Home/HomeQuery";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App' id='app'>
          <HeaderQuery />

          <Routes>
            <Route path='/' element={<HomeQuery />} />
            <Route path='/:id' element={<HomeQuery />} />

            <Route path='/product/:id' element={<ProductQuery />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
