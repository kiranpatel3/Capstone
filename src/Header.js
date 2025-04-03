import React from "react";
import { Link } from 'react-router-dom';
import bannerImg from './images/restaurantfood.jpg'

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>New Jersey</h3>
                    <p>We are family based Mediterranean restaurant, focused on traditional recipes served with modern twist.</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt=''></img>
                </div>
            </section>
        </header>
    );
};

export default Header;