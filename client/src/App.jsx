import { useState } from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Details from './pages/details'
import AddAdvertisementPage from './pages/add-advertisement'
import FavoritesPage from './pages/favorites'
import HomePage from './pages/home'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/add-advertisement" element={<AddAdvertisementPage />} />
          <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
