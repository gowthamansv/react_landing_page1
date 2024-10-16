import React from 'react';
import vacationElement from '../asset/Element.png';
import sliderButton from '../asset/Slider-btn.png';
import romeImage from '../asset/fourth-1.png';
import londonImage from '../asset/fourth-2.png';
import osakaImage from '../asset/fourth-3.png';
import tripIcon from '../asset/trip.png';
import starIcon from '../asset/star 1.png';
import testimonialProfile from '../asset/testimonial-profile.png';
import testimonialDecoration from '../asset/Element-2.png';

const Tour = () => {
    return (  
    <>
    <section className="vacation-plan-section">
      <div className="vacation-plan-container">
        <div className="vacation-plan-content">
          <div className="vacation-plan-row">
            <div className="vacation-plan-text-column">
              <div className="vacation-plan-text-wrapper">
                <h2 className="vacation-plan-title">
                  Best <span style={{ color: '#fa7436' }}>vacation plan</span>
                </h2>
                <p className="vacation-plan-description">
                  Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!
                </p>
              </div>
            </div>
            <div className="vacation-plan-image-column">
              <img src={vacationElement} alt="Vacation plan illustration" className="vacation-plan-image" />
            </div>
          </div>
          <img src={sliderButton} alt="Decorative element" className="vacation-plan-decoration" />
        </div>
        <div className="vacation-options">
          <div className="vacation-options-row">
            <div className="vacation-option-column">
              <div className="vacation-option-card">
                <img src={romeImage} alt="Rome" className="vacation-option-image" />
                <div className="vacation-option-info">
                  <h3 className="vacation-option-location">Rome, Italy</h3>
                  <span className="vacation-option-price">$5,42k</span>
                </div>
                <div className="vacation-option-details">
                  <div className="vacation-option-duration">
                    <img src={tripIcon} alt="Duration icon" className="duration-icon" />
                    <span>10 Days Trip</span>
                  </div>
                  <div className="vacation-option-rating">
                    <img src={starIcon} alt="Rating star" className="rating-icon" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="vacation-option-column">
              <div className="vacation-option-card">
                <img src={londonImage} alt="London" className="vacation-option-image" />
                <div className="vacation-option-info">
                  <h3 className="vacation-option-location">London, UK</h3>
                  <span className="vacation-option-price">$2,42k</span>
                </div>
                <div className="vacation-option-details">
                  <div className="vacation-option-duration">
                    <img src={tripIcon} alt="Duration icon" className="duration-icon" />
                    <span>07 Days Trip</span>
                  </div>
                  <div className="vacation-option-rating">
                    <img src={starIcon} alt="Rating star" className="rating-icon" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="vacation-option-column">
              <div className="vacation-option-card">
                <img src={osakaImage} alt="Osaka" className="vacation-option-image" />
                <div className="vacation-option-info">
                  <h3 className="vacation-option-location">Osaka, Japan</h3>
                  <span className="vacation-option-price">$5,42k</span>
                </div>
                <div className="vacation-option-details">
                  <div className="vacation-option-duration">
                    <img src={tripIcon} alt="Duration icon" className="duration-icon" />
                    <span>10 Days Trip</span>
                  </div>
                  <div className="vacation-option-rating">
                    <img src={starIcon} alt="Rating star" className="rating-icon" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-row">
          <div className="testimonials-text-column">
            <div className="testimonials-text-wrapper">
              <h2 className="testimonials-title">
                What people say <br />
                <span style={{ color: '#fa7436' }}>about Us.</span>
              </h2>
              <p className="testimonials-description">
                Our Clients send us bunch of smilies with our services and we love them.
              </p>
              <img src={sliderButton} alt="Decorative element" className="testimonials-decoration" />
            </div>
          </div>
          <div className="testimonials-content-column">
            <div className="testimonials-content-wrapper">
              <img src={testimonialProfile} alt="Testimonial avatar" className="testimonial-avatar" />
              <div className="testimonial-card-wrapper">
                <img src={testimonialDecoration} alt="Decorative element" className="testimonial-decoration" />
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-text">
                      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as
                      knew next. Of believed or diverted no."
                    </p>
                    <h3 className="author-name">Mike Taylor</h3>
                    <p className="author-title">Lahore, Pakistan</p>
                  </div>
                  <div className="testimonial-author-info">
                    <h3 className="author-name">Chris Thomas</h3>
                    <p className="author-title">CEO of Red Button</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
    );
};

export default Tour;