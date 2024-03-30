import React, { useState } from 'react';
import { useCart } from '../components/CartCContext'; // Import the useCart hook

const OrderItem = ({ orders }) => {
  const [activeCategory, setActiveCategory] = useState("*"); // Initial active category is set to show all orders
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { cart, addToCart, removeFromCart } = useCart(); // Access cart and cart manipulation functions from context
console.log(useCart())
  // Function to handle category filter
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  // Function to toggle search visibility
  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Function to handle search text change
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Function to handle button click (add to cart or remove from cart)
  const handleButtonClick = (item, index) => {
    const foundIndex = cart.findIndex(cartItem => cartItem.productName === item.productName);
    if (foundIndex === -1) {
      addToCart(item);
    } else {
      removeFromCart(foundIndex);
    }
  };

  // Filtered orders based on active category and search text
  const filteredOrders = orders.filter(order => {
    return (
      (activeCategory === "*" || order.category === activeCategory) &&
      order.productName.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <section className="food_section layout_padding-bottom " id="menu">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>

        {/* Search form */}
        <div className="text-right mb-3">
          {isSearchVisible && (
            <form className="form-inline d-inline-block ml-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchText}
                  onChange={handleSearchChange}
                />
              </div>
            </form>
          )}
          <button className="btn btn-dark" onClick={toggleSearchVisibility}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
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
            {filteredOrders.map((order, index) => (
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
                      <button 
                        className="btn btn-dark my-2 my-sm-0" 
                        type="button" 
                        onClick={() => handleButtonClick(order, index)} // Pass index of the item
                      >
                        {cart.some(item => item.productName === order.productName) ? "Added to Cart" : "Add Cart"}
                      </button>
                    </div>
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

export default OrderItem;
