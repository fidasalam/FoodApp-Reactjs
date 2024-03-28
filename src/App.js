import React from 'react';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderSection from './components/SliderSection';
import OfferSection from './components/OfferSection';
import OrderItem from './components/OrderItem';
import { orders, offers, slides } from './components/data';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div>
      <Header />
      <SliderSection slides={slides}/>
      <OfferSection offers={offers} />
      <OrderItem orders={orders} />
      <AboutSection />
      <FooterSection/>
    </div>
  );
}

export default App;
