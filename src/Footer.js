import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div class="footer__row__1">
        <h4>Questions? Call 000-800-040-1843</h4>
      </div>
      <div class="footer__row__2">
        <div class="column__1">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div class="column__2">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div class="column__3">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div class="column__4">
          <p>Media Centre</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div class="footer__row__3">
        <div class="dropdown__container">
          <i class="fas fa-globe"></i>
          <select
            name="languages"
            id="languagesSelect"
            class="language__drop__down"
          >
            <option value="english" selected>English</option>
            <option value="hindi">हिन्दी</option>
          </select>
        </div>
      </div>
      <div class="footer__row__4">
        <p>Netflix India</p>
      </div>
    </div>
  )
}

export default Footer