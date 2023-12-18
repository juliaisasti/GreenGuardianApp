import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./Home"
import Search from './Search'
import Profile from './Profile'
import FavoriteView from './FavoriteView'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-favorite" element={<FavoriteView />} />
      </Routes>
    </main>
  );
};

export default Main;
