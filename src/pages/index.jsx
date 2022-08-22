import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Favorite from "./Favorite";
import Book from "./Book";

const MainComponent = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/book' element={<Book />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default MainComponent
