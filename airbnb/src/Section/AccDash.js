import React from "react";
import Card from "./Card";

const AccDash = () => {
  return (
    <>
      {" "}
      <div className="accdash">
        <div>
          <h2>Account</h2>
          <div className="profile">
            <h4>Name</h4>,<p>emailaddress</p>
            <strong>Go to Profile</strong>
          </div>
        </div>
        <Card />
        
      </div>
      
    </>
  );
};

export default AccDash;
