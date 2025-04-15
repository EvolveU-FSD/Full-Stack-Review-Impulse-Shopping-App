import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import { CssBaseline, Container } from '@mui/material';
import './index.css';

function App() {
  return (
    <CartProvider>
      <CssBaseline />
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;