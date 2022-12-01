import React, { useState } from "react";
import "./Menu.css";
import Modals from "./Modal";

const Menu = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {" "}
      <div className="stickymenu">
        <h5 className="fnth5" onClick={() => setShow(true)}>
          <strong> Log in</strong>
        </h5>

        <h5 className="fnth5">Sign up</h5>
        <hr />
        <h5 className="fnth5">Airbnb your experience</h5>
        <h5 className="fnth5">Host an experience </h5>
        <h5 className="fnth5">Help</h5>
      </div>
      <Modals show={show} setShow={setShow} />
    </>
  );
};

export default Menu;
