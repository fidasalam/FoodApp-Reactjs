import React from 'react';
import image from '../images/client1.jpg'

const AboutUs = () => {
  return (
    <section className="about_section layout_padding"id="about" >
      <div className="container">
        <div className='text-center mb-5'>
          <h1>About</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={image} alt="Burger and Pizza Shop" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="detail-box">
              <div className="heading_container">
                <h2>We The crust</h2>
              </div>
              <p>
                At The Crust , we're passionate about serving delicious, high-quality food in a welcoming
                environment. Our journey began with a simple idea: to create a place where friends and families can gather
                to enjoy mouthwatering burgers and pizzas made with the finest ingredients.
              </p>
              <p>
                Our commitment to excellence extends beyond our menu. We strive to provide exceptional customer service
                and create memorable dining experiences for each and every guest. Whether you're craving a classic cheeseburger,
                a gourmet pizza, or one of our signature specialties, we guarantee satisfaction with every bite.
              </p>
              <p>
                Join us at Burger & Pizza Junction and discover why we're not just another fast-food joint – we're a destination
                for food lovers who appreciate quality, flavor, and friendly service. Come hungry, leave happy!
              </p>
              <a href="/menu">Explore Our Menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
