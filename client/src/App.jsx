import { useState } from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import DetailsPage from './pages/details'
import AddAdvertisementPage from './pages/add-advertisement'
import FavoritesPage from './pages/favorites'
// import HomePage from './pages/home';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
    {/* <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />}/> */}
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/add-advertisement" element={<AddAdvertisementPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </>
  )
}

export default App
