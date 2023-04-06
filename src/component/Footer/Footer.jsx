import { faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import Button from "../Button/Button";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_top">
        <p>Ready to get Start ? </p>
        <Button>get Start </Button>
      </div>
      <div className="footer-info">
        <div>
          <h5>MultiTech</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <h5>Subscribe to get important update </h5>
          <input type="text" placeholder="Enter E-mail" /> <br />
          <Button>Subscribe</Button>
        </div>
        <div>
          <h5>Follow Us </h5>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="callMe">
          <h5>Call Us</h5>
          <h1><span> <FontAwesomeIcon icon={faPhone} /></span> +8801791835039</h1>
          <h1><span> <FontAwesomeIcon icon={faPhone} /></span> +8801518474541</h1>
        </div>
      </div>
      <hr />
      <div className="footer-sub-info">
        <div>
          <p>@ {new Date().getFullYear()} MultiTech.All Right Received </p>
        </div>
        <div>
          <p>privacy policy</p>
          <p>terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
