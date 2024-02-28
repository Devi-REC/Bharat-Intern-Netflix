import React  from 'react';
import './App.css';
import FAQ from './FAQ';
import FeatureComponent from './FeatureComponent';
import Footer from './Footer';

function App() {
  // State to manage the visibility of answers
 
  return (
    <div className="container">
           <header>
      <nav className="navbar">
        <div className="navbar__brand">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className="brand__logo"
          />
        </div>

        <div className="navbar__nav__items">
          <div className="nav__item">
            <div className="dropdown__container">
              <i className="fas fa-globe"></i>
              <select
                name="languages"
                id="languagesSelect"
                className="language__drop__down"
              >
                <option value="english" selected style={{ color: 'black' }}>English</option>
                <option value="hindi" style={{ color: 'black' }}>हिन्दी</option>
              </select>
            </div>
          </div>

       
        </div>
      </nav>
    </header>
      <div className='cont'>
      
      <div className="content">
        <h1 className="font_title">Unlimited movies, TV shows and more</h1>
        <h2 className='font_1'>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Get Started</button>
        </form>
      </div>
     
      </div>
      <div className="faq">
       
        
       <FAQ />
        {/* Add more FAQ items similarly */}
      </div>
      
<FeatureComponent/>
      <Footer/>
    </div>
  );
}

export default App;
