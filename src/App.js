import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/pages/Cart/Cart';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import MenuDetails from './components/pages/MenuDetails/MenuDetails';
import Package from './components/pages/Package/Package';
import MenuContext from './contexts/MenuContext';

export default function App() {
  return (
    <BrowserRouter>
      <MenuContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu/:id" element={<MenuDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MenuContext>
    </BrowserRouter>
  );
}
