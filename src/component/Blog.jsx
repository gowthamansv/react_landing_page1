import React from 'react';
import blogImage1 from '../asset/six-1.png';
import blogImage2 from '../asset/six-2.png';
import blogImage3 from '../asset/six-3.png';
import blogImage4 from '../asset/six-4.png';
import sliderDecoration from '../asset/Slider.png';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">
          Get update with <span style={{ color: '#fa7436' }}>latest blog</span>
        </h2>
        <div className="blog-grid">
          <div className="blog-row">
            <div className="blog-card">
              <div className="blog-card-content">
                <img src={blogImage1} alt="Blog post 1" className="blog-image" />
                <h3 className="blog-post-title">The Amazing Difference a Year of Travelling.</h3>
                <p className="blog-post-date">July 27, 2021</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-content">
                <img src={blogImage2} alt="Blog post 2" className="blog-image" />
                <h3 className="blog-post-title">Travel far enough, you meet yourself.</h3>
                <p className="blog-post-date">July 27, 2021</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-content">
                <img src={blogImage3} alt="Blog post 3" className="blog-image" />
                <h3 className="blog-post-title">How to Save Money While Visiting Africa.</h3>
                <p className="blog-post-date">July 27, 2021</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-content">
                <img src={blogImage4} alt="Blog post 4" className="blog-image" />
                <h3 className="blog-post-title">Reflections on 5 Months of Travel: Time to Hang</h3>
                <p className="blog-post-date">July 27, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <img src={sliderDecoration} alt="Decorative element" className="blog-decoration" />
      </div>
    </section>
  );
};

export default Blog;
