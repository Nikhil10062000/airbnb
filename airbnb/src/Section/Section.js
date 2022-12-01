import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Section.css";
import Menu from "./Menu";

const Section = () => {
  const [open, setopen] = useState(true);
  const handleOpen = () => {
    if (open === true) {
      setopen(false);
    } else {
      setopen(true);
    }
  };
  return (
    <div div className="sect">
      <hr />
      <div className="acc">
        <h5 className="logodiv">airbnb</h5>

        <div>
          <div className="loginsec">
            <div>
              <p className="fontayh">Airbnb your home</p>
            </div>
            <div>
              <TbWorld />
            </div>
            <div className="iconbtn">
              <button className="lgbtn" onClick={handleOpen}>
                <AiOutlineMenu size={15} className=" gry" />
                <CgProfile size={30} className="gry" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      {open ? <div></div> : <Menu />}
    </div>
  );
};

export default Section;
