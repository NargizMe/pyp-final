import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/details";
import AddAdvertisementPage from "./pages/add-advertisement";
import FavoritesPage from "./pages/favorites";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/Navbar";
// import { Breadcrumb, Layout, Menu } from "antd";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/add-advertisement" element={<AddAdvertisementPage />} />
        <Route path="/details/:id" element={<DetailsPage/>} />
      </Routes>
    </>
  );
}

export default App;
