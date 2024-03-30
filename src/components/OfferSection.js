import React from 'react';

const OfferSection = ({ offers }) => { 
  return (
    <section className="offer_section layout_padding-bottom" id="offer"> 
      <div className="offer_container">
        <div className="container">
          <div className="row">
            {offers.map((offer, index) => (
              <div className="col-md-6" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img src={offer.imageSrc} alt={offer.name} />
                  </div>
                  <div className="detail-box">
                    <h5>{offer.name}</h5>
                    <h6>
                      <span>{offer.discount}</span> Off
                    </h6>
                    <a href={offer.link}>Order Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
