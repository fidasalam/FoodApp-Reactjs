import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase/setup'; // Import your Firebase Storage instance

const fileRef = ref(storage, 'f1.png'); 


getDownloadURL(fileRef)
  .then((url) => {
    console.log('Download URL:', url);
    // Now you can use the URL as needed, such as storing it in Firestore or displaying it in your application
  })
  .catch((error) => {
    console.error('Error getting download URL:', error);
  });
function HeroSection() {
  return (
    <section className="slider_section">
      <div className="hero_area">
        {/* Hero area content goes here */}
      </div>
    </section>
  );
}

export default HeroSection;
