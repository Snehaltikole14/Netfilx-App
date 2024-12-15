import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>Questions? Call 000-800-919-1743</p>

      <div className="footer-left">
        <p> FAQ</p>
        <p>Help Centre</p>
        <p>Account</p>
        <p>Media Centre</p>
        <p>Investor Relations </p>
        <p>Jobs </p>
        <p>Ways to Watch</p>
        <p>Terms of Use</p>
        <p>Privacy Cookie</p>
        <p>Preferences Corporate</p>
        <p> Information</p>
        <p> Contact Us</p>
        <p> Speed Test</p>
        <p> Legal Notices</p>
        <p> Only on Netflix</p>
      </div>

      <div className="footer-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#FFFFFF"
        >
          <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
        </svg>
        <select>
          <option lang="en" label="English" value="en-IN">
            {" "}
            English
          </option>
          <option lang="hi" label="हिन्दी" value="hi-IN">
            हिन्दी
          </option>
        </select>
        <p>Netflix India</p>
      </div>
    
    </div>
  );
}

export default Footer