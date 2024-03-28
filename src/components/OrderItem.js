import React, { useState } from 'react';

const OrderItem = ({ orders }) => {
  const [activeCategory, setActiveCategory] = useState("*"); // Initial active category is set to show all orders

  // Function to handle category filter
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>

        {/* Filter menu */}
        <ul className="filters_menu">
          <li className={activeCategory === "*" ? "active" : ""} onClick={() => handleCategoryFilter("*")}>All</li>
          <li className={activeCategory === "burger" ? "active" : ""} onClick={() => handleCategoryFilter("burger")}>Burger</li>
          <li className={activeCategory === "pizza" ? "active" : ""} onClick={() => handleCategoryFilter("pizza")}>Pizza</li>
          <li className={activeCategory === "pasta" ? "active" : ""} onClick={() => handleCategoryFilter("pasta")}>Pasta</li>
          <li className={activeCategory === "fries" ? "active" : ""} onClick={() => handleCategoryFilter("fries")}>Fries</li>
        </ul>

        {/* Filtered orders */}
        <div className="filters-content">
          <div className="row grid">
            {orders.map((order, index) => (
              
              (activeCategory === "*" || order.category === activeCategory) && (
                <div key={index} className={`col-sm-6 col-lg-4 all ${order.category}`}>
                  <div className="box">
                    <div className="img-box">
                      <img src={order.image} alt={order.productName} />
                    </div>
                    <div className="detail-box">
                      <div className="product-info">
                        <h5>{order.productName}</h5>
                        <div className="star-price">
                          <p>{order.starRating} <i className="fas fa-star" style={{ color: "gold" }}></i></p>
                        </div>
                      </div>
                      <div className="options">
                        <h6>&#8377; {order.price}</h6>
                        <form className="form-inline">
                          <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                            <i className="fa fa-shopping-cart" style={{ color: "white" }} aria-hidden="true"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderItem;
