import React from 'react';
import './Home.css';
import Logo from '../../Assets/logo.png';
import Mainpage from '../../Assets/Mainpage.png';

const Home = () => {
  return (
    <div className="MainHome">
      <div className="Home">
        <nav className="Navbar">
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="ExploreDropdown">
            <button className="ExploreButton">
              Explore
            </button>
            <div className="DropdownContent">
              <a href="#option1">Option 1</a>
              <a href="#option2">Option 2</a>
              <a href="#option3">Option 3</a>
            </div>
          </div>
          <div className="SearchBar">
            <input type="text" placeholder="What do you want to learn today" />
          </div>
          <div className="AuthButtons">
            <button className="SigninButton">Sign In</button>
            <button className="RegisterButton">Register Free</button>
          </div>
        </nav>
        <div className="Room">
          <div className='Test'>
            <p>Home Integrated Degree Programs Electrical and Communication</p>
            <hr />
            <h2>Electrical and Communication</h2>
            <div className="Rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="white-star">★</span>
              <span className="rating-text">(4.5)</span>
            </div>
          </div>
          <div>
            <img src={Mainpage} alt="Electric" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;