import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Tv, Search} from './screens';
import {Header} from "./components";

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/tv"} element={<Tv />} />
          <Route path={"/search"} element={<Search />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
