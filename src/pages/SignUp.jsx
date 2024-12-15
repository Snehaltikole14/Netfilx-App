import React from 'react'
import Header from '../Components/Header';
import './signup.css'
import Footer from '../components/Footer';


const SignUp = () => {
  

  return (
    <div className="home-container">
      <div className="background-color"></div>
      <Header />

      <div className="home">
        <div className="signin-box">
          <h2>Sign In</h2>

          <form>
            <input type="email" placeholder="Email or mobile number" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Sign In</button>
          </form>

          <div className="extra-links">
            <p>OR</p>
            <button className="code-btn">Use a sign-in code</button>
            <a href="#">Forgot password?</a>

            <label class="checkbox-container">
              <input type="checkbox" class="checkbox-input" />
              <span class="checkbox-custom"></span>
              Remember me
            </label>

            <p className='para'>New to Netflix? Sign up now.</p>
            <p className='para1'>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-background">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp
