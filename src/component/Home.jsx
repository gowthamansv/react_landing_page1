import React from 'react';
import home from "../asset/home.png"
import trophy from "../asset/trophy-removebg-preview_1.png"
import googlemaps from "../asset/google-maps 1.png"
import star from "../asset/star 1.png"
import homeelement from "../asset/home-elemnt.png"
import downarrow from "../asset/down arrow.png"


const Home = () => {
    return (
        <>
        <div className="home">
            <div className="home-content">
                <h1>Get started your <br /> exciting <span>journey</span> <br /> with us.
                </h1>
                <p>
                    A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.
                </p>
                <button className="btn home-btn">
                    Discover Now
                </button>
            </div>
            <div className="home-right">
                <img src={home} alt="home-image" />
            </div>
            <div className="home-card">
                <div className="right-card top">
                    <img src={trophy} alt="trophy-removebg-preview" />
                    <h4>Best Tour Awards</h4>
                </div>
                <div className="right-card middle">
                    <img src={googlemaps} alt="google-maps" />
                    <div className="right-card-content">
                        <h4>Explore</h4>
                        <p>Every corner of the world with us</p>
                    </div>
                </div>
                <div className="right-card bottom">
                    <img src={star} alt="star" />
                    <div className="right-card-content">
                        <h4>27k</h4>
                        <p>Customer Reviewd</p>
                    </div>
                </div>
                <img src={homeelement} alt="/" className="home-img" />
            </div>
        </div>
        <section className="search-bar">
                <div className="search-container">
                    <form className="search-content">
                        <div className="search-fields">
                            <div className="search-inputs">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <label for="location-input" className="visually-hidden">Location</label>
                                        <img src={downarrow} className="input-icon" alt="" />
                                        </div>
                                    <div className="input-wrapper">
                                        <label for="date-input" className="visually-hidden">Date</label>
                                        <img src={downarrow} className="input-icon" alt=""/>
                                        </div>
                                    <div className="input-wrapper">
                                        <label for="guest-input" className="visually-hidden">Guest</label>
                                        <img src={downarrow} className="input-icon" alt=""/>
                                        </div>
                                </div>
                                <div className="input-descriptions">
                                    <p className="input-description">Where are you going</p>
                                    <p className="input-description">When you will go</p>
                                    <p className="input-description">Number of guest</p>
                                </div>
                            </div>
                        </div>
                        <div className="search-button-wrapper">
                            <button type="submit" className="explore-btn">Explore Now</button>
                        </div>
                    </form>
                </div>
            </section></>
    );
};

export default Home;