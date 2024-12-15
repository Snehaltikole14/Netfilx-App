import React from 'react'
import './middlepart.css'
import Cards from './Cards'
import Questions from './Questions'
import Account from './Account'
import Footer from './Footer'



const MiddlePart = () => {
  return (
    <div className="middlepart-container">
      <h2>Trending Now</h2>
      <select className="country" name="" id="">
        <option value="india">India</option>
        <option value="en">Global</option>
      </select>
      <select className="shows" name="" id="">
        <option value="Movies">Movies</option>
        <option value=""> TV Shows</option>
      </select>

      <div className="trending-movies">
        <div className="trending-movies1"></div>
        <div className="trending-movies2"></div>
        <div className="trending-movies3"></div>
        <div className="trending-movies4"></div>
      </div>

      <h2 className="cards-h2">More reasons to join</h2>
      <Cards />

      <h2 className="cards-h2">Frequently Asked Questions</h2>
      <Questions />
      <p className='email-p'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Account />
      <Footer/>
      
    </div>
  );
}

export default MiddlePart
