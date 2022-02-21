import React, { ReactElement } from "react";
import "./AboutMeDesc.css";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Props {}

function AboutMeDesc({}: Props): ReactElement {
  return (
    <div className="AboutMeBody">
      <div className="AboutMeBodyLeft">
        <div className="smline"></div>
        <div className="AboutMeName">
          <h4>Hello👋,I'm</h4>
          <h1>Abhiraaj,</h1>
          <h5>
            <p style={{ opacity: "0.7", marginRight: "0.4rem" }}>a Fullstack</p>
            <span>Developer</span>
            <div className="lgline"></div>
          </h5>
        </div>
        <div className="AboutMeProjCTA">
          <p style={{ marginTop: "30px" }}>
            <Link to="">Instagram</Link> | <Link to="">LinkdIN</Link> |
            <Link to="">Facebook</Link>
          </p>
        </div>
        <div className="AboutMeContact">
          <h3>CONTACT ME</h3>
          <h5>
            Email : <span>abhiraajverma@gmail.com</span>
          </h5>
          <h5>
            Contact Number : <span>+91 9987712345</span>
          </h5>
          {/* <h3>HELP ME OUT</h3> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMeDesc;
