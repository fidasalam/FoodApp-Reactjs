import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SliderSection = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="container">
                <div className="row justify-content-left align-items-center">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <div className="col-md-12 ">
                    <div className="btn-box  mt-5">
                      <a href={slide.link} className="btn1">{slide.buttonText}</a>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
     
        <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next" onClick={handleNextClick}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default SliderSection;
