import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div id="contact-section" style={{ marginBottom: "20px" }}>
      <br/><br/>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <div className="contact-info text-start ms-1">
          <h2 className="fw-bolder text-light">Contact Me</h2>
          <div className="mb-3 d-flex flex-sm-row flex-column justify-content-center align-items-center">
            <ContactItem icon={faEnvelope} text="naveedhafeezmohammed@gmail.com" link="mailto:naveedhafeezmohammed@gmail.com" />
            <ContactItem icon={faPhone} text="7907803953" link="tel:7907803953" />
            <ContactItem icon={faLinkedin} text="LinkedIn" link="https://www.linkedin.com/in/naveed-hafeez-mohammed-6a41a6216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" />
            <ContactItem icon={faGithub} text="GitHub" link="https://github.com/NaveedHafeez004" target="_blank" />
          </div>
        </div>
        <div className="newsletter">
          <h3 className='fw-bolder text-light text-start'>Subscribe to Newsletter</h3>
          <form>
            <div className="mb-3 d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <input type="text" className="form-control m-1" placeholder="Your Name" />
                <input type="email" className="form-control m-1" placeholder="Your Email" />
                <button type="submit" className="btn btn-dark w-100 m-1">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text, link, target }) {
  return (
    <div className="mb-3 mx-2">
      <a href={link} target={target} className="text-decoration-none text-light">
        <FontAwesomeIcon icon={icon} className="text-primary me-2 text-dark contact-icon" />
        {text}
      </a>
    </div>
  );
}

export default Contact;