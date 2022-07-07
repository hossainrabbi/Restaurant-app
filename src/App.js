import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import MenuContext from './contexts/MenuContext';

export default function App() {
  return (
    <BrowserRouter>
      <MenuContext>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MenuContext>
    </BrowserRouter>
  );
}
