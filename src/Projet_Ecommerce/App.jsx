import { BrowserRouter, Route, Routes,Link, Outlet } from "react-router-dom"
import React from 'react';
import Index from "./page";
import Header from "./page/header";
import Account from "./page/Account";
import { Provider } from "react-redux";
import Footer from "./page/footer";
import store from "./Redux/store";
import Produite from "./page/Produite";
import ScrollToTop from "./page/ScrollToTop";
import Cart_Product from "./page/Cart_Product";
import DeletePageConfierm from "./page/DeletePageConfierm";
import Category_pro from "./page/Category_pro";
import Product_Search from "./page/Product_Search";
import Page_NOTFOUND from "./page/Page_NOTFOUND";
export default function App(props) {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop />
         <Header  />
        <Routes>
       
          <Route path="/" index element={<Index  />} />
          <Route path="/Account"  element={<Account  />} />
          <Route path="/Produite/:id"  element={<Produite  />} />
          <Route path="/Cart"  element={<Cart_Product  />} />
          <Route path="/DeleteConfierm/:id"  element={<DeletePageConfierm  />} />
          <Route path="/category/:nom"  element={<Category_pro  />} />
          <Route path="/ProductsSearch/:valueSearch"  element={<Product_Search  />} />
          <Route path="*"  element={<Page_NOTFOUND  />} />

        </Routes>
        <Footer/>
    </BrowserRouter>
    </Provider>
    );
}

