import React from 'react';
import secondelement from "../asset/second-element.png";
import second1 from "../asset/second-1.png";
import second2 from "../asset/second-2.png";
import second3 from "../asset/second-3.png";

const About = () => {
    return (
    <>
    <div className="features-section">
        <div className="features-container">
          <div className="features-content">
            <div className="features-row">
              <div className="features-text-column">
                <div className="features-text-wrapper">
                  <h2 className="features-title">
                    Things you need <span style={{ color: '#fa7436' }}>to do</span>
                  </h2>
                  <p className="features-description">
                    We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.
                  </p>
                </div>
              </div>
              <div className="features-image-column">
                <img src={secondelement} className="features-image" alt="Feature element" />
              </div>
            </div>
          </div>
          <div className="feature-icons-container">
            <div className="feature-icons-row">
              <div className="feature-icon-column">
                <img src={second1} alt="Feature icon 1" className="feature-icon" />
                <h3>Sign Up</h3>
                <p>Completes all the work associated with planning and processing</p>
              </div>
              <div className="feature-icon-column">
                <img src={second2} alt="Feature icon 2" className="feature-icon" />
                <h3>Worth of Money</h3>
                <p>After successful access then book from exclusive deals & pricing</p>
              </div>
              <div className="feature-icon-column">
                <img src={second3} alt="Feature icon 3" className="feature-icon" />
                <h3>Exciting Travel</h3>
                <p>Start and explore a wide range of exciting travel experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default About;