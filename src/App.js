import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/pages/Cart/Cart';
import Home from './components/pages/Home/Home';
import MenuDetails from './components/pages/MenuDetails/MenuDetails';
import MenuContext from './contexts/MenuContext';

export default function App() {
  return (
    <BrowserRouter>
      <MenuContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:id" element={<MenuDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MenuContext>
    </BrowserRouter>
  );
}
