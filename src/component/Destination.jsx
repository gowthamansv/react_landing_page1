import React from 'react';
import sliderbtn from "../asset/Slider-btn.png"
import third1 from "../asset/third-1.png"
import third2 from "../asset/third-2.png"
import third3 from "../asset/third-3.png"
import third4 from "../asset/third-4.png"
import star from "../asset/star 1.png"
import location from "../asset/location.png"


const Destination = () => {
    return (
        <div>
            <section className="deals-section">
  <div className="deals-container">
    <h2 className="deals-title">
      Exclusive <span style={{ color: '#fa7436' }}>deals & discounts</span>
    </h2>
    <p className="deals-description">
      Discover our fantastic early booking discounts & start planning your journey.
    </p>
    <div className="deals-grid">
      <div className="deals-row">
        <div className="deal-card">
          <div className="deal-card-content">
            <img src={third1} alt="Madrid" className="deal-image" />
            <div className="deal-info">
              <h3 className="deal-location">Madrid</h3>
              <div className="deal-rating">
                <img src={star} alt="Rating star" className="rating-icon" />
                <span>4.8</span>
              </div>
            </div>
            <div className="deal-details">
              <div className="deal-country">
                <img src={location} alt="Country icon" className="country-icon" />
                <span>Spain</span>
              </div>
              <div className="deal-price">
                <span className="original-price">$950</span>
                <span className="discounted-price">$850</span>
              </div>
            </div>
          </div>
        </div>

        <div className="deal-card">
          <div className="deal-card-content">
            <div className="deal-image-wrapper">
              <img src={third2} alt="Firenze" className="deal-image firenze" />
              <div className="deal-hover">
                <button className="btn book-now-btn">Book Now</button>
              </div>
            </div>
            <div className="deal-info">
              <h3 className="deal-location">Firenze</h3>
              <div className="deal-rating">
                <img src={star} alt="Rating star" className="rating-icon" />
                <span>4.5</span>
              </div>
            </div>
            <div className="deal-details">
              <div className="deal-country">
                <img src={location} alt="Country icon" className="country-icon" />
                <span>Italy</span>
              </div>
              <div className="deal-price">
                <span className="original-price">$850</span>
                <span className="discounted-price">$750</span>
              </div>
            </div>
          </div>
        </div>

        <div className="deal-card">
          <div className="deal-card-content">
            <img src={third3} alt="Paris" className="deal-image" />
            <div className="deal-info">
              <h3 className="deal-location">Paris</h3>
              <div className="deal-rating">
                <img src={star} alt="Rating star" className="rating-icon" />
                <span>4.4</span>
              </div>
            </div>
            <div className="deal-details">
              <div className="deal-country">
                <img src={location} alt="Country icon" className="country-icon" />
                <span>France</span>
              </div>
              <div className="deal-price">
                <span className="original-price">$699</span>
                <span className="discounted-price">$599</span>
              </div>
            </div>
          </div>
        </div>

        <div className="deal-card">
          <div className="deal-card-content">
            <img src={third4} alt="London" className="deal-image" />
            <div className="deal-info">
              <h3 className="deal-location">London</h3>
              <div className="deal-rating">
                <img src={star} alt="Rating star" className="rating-icon" />
                <span>4.8</span>
              </div>
            </div>
            <div className="deal-details">
              <div className="deal-country">
                <img src={location} alt="Country icon" className="country-icon" />
                <span>UK</span>
              </div>
              <div className="deal-price">
                <span className="original-price">$850</span>
                <span className="discounted-price">$850</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={sliderbtn} alt="Decorative element" className="deals-decoration" />
  </div>
</section>
        </div>
    );
};

export default Destination;