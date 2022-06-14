import React from "react";
import logo from "../../assets/lever-logo-full.svg"

import {Content, FooterComponent} from "./styles"

const Footer = () => {
  return <FooterComponent>
    <Content>
        <a href="">Render Home Page</a>


        <div className="footer-logo">
            <span>Jobs powered by</span>
            <img src={logo} />
        </div>
    </Content>
    

  </FooterComponent>
};

export default Footer;
