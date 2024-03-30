import React, { useState, useEffect } from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa';

const FooterSection = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []);


  const iconStyle = {
    color: 'white',
  };

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#">
                  <FaMapMarker />
                  <span>Location</span>
                </a>
                <a href="#">
                  <FaPhone />
                  <span>Call +01 1234567890</span>
                </a>
                <a href="#">
                  <FaEnvelope />
                  <span>thecrust@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="#" className="footer-logo">The Crust</a>
              <p>
       
              </p>
              <div className="footer_social">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaPinterest /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; <span>{currentYear}</span> All Rights Reserved By
            <a href="https://html.design/">The Crust</a><br /><br />
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
