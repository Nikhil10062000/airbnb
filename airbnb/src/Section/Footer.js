import React from "react";
import "./Footer.css";
import { TbWorld } from "react-icons/tb";
import { BiRupee } from "react-icons/bi";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="fcard">
          <b>Support</b>

          <p>Help Centre</p>
          <p>Air cover</p>
          <p>Supporting people with disabilities</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>Report a neigbhourd concen</p>
        </div>

        <div className="fcard">
          <b>Community</b>

          <p>Airbnb.org: disaster relief housing</p>
          <p>Combating discrimination</p>
        </div>

        <div className="fcard">
          <b>Hosting</b>

          <p>Airbnb your home</p>
          <p>AirCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>

        <div className="fcard">
          <b>Airbnb</b>

          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Careers</p>
          <p>Investors</p>
        </div>
      </div>

      <div className="accountfooter">
        <div className="footfoot">
          <p>© 2022 Airbnb, Inc.</p>
          <p>.</p>
          <p>Privacy</p>
          <p>.</p>
          <p>Terms</p>
          <p>.</p>
          <p>Sitemap</p>
          <p>.</p>
          <p>Company details</p>
        </div>

        <div className="footicon">
          <TbWorld />
          <b>English (IN)</b>
          <b>
            <BiRupee />
          </b>
          <></>
          <b>INR</b>

          <AiFillFacebook size={23} />
          <AiFillTwitterSquare size={23} />
          <AiFillInstagram size={23} />
        </div>
      </div>
    </>
  );
};

export default Footer;
