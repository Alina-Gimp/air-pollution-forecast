import React from 'react';
import github_icon from './contact-icon/github_icon.png';
import linkedin_icon from './contact-icon/linkedin_icon.png';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="contact">
          <div className="contactIcons">
            <div className="github">
            <a href="https://github.com/Alina-Gimp?tab=repositories" target="_blank">
              <img alt="github_icon" src={github_icon}/>
            </a>
          </div>
            <div className="linkedin">
            <a href="https://www.linkedin.com/in/alinagimp/" target="_blank">
              <img alt="github_icon" src={linkedin_icon}/>
            </a>
            </div>
          </div>
          <p>Support: email@.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;