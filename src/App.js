import React from 'react';
import { CartProvider } from './components/CartCContext';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderSection from './components/SliderSection';
import OfferSection from './components/OfferSection';
import OrderItem from './components/OrderItem';
import CartPage from './components/CartPage';
import { orders, offers, slides } from './components/data';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
        <Route
            path="/"
            element={
              <>
          
                <SliderSection slides={slides} />
                <OfferSection offers={offers} />
                <OrderItem orders={orders} />
                <AboutSection />
              
              </>
            }
          />
          <Route path="/menu" element={<OrderItem orders={orders} />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/offer" element={<OfferSection offers={offers} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <FooterSection />
      </Router>
    </CartProvider>
  );
}

export default App;
