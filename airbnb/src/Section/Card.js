import React from "react";
import { AiOutlineIdcard , AiOutlineNotification , AiOutlineGift } from "react-icons/ai";
import { MdOutlineSecurity , MdOutlinePayments , MdCardTravel , MdOutlineBuild } from "react-icons/md";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosSwitch} from "react-icons/io";
const Card = () => {
  return (
    <div className="cardsflex">
      <div className="cards">
        <AiOutlineIdcard size={35} />
        <div className="cardvalue">
          <h6>Personal info</h6>
          <p className="cardf">Provide persoanl details and how we can reach you</p>
        </div>
      </div>

      <div className="cards">
        <MdOutlineSecurity  size={35}/>
        <div>
          <h6>Login & security</h6>
          <p className="cardf">Update your password and secure your account</p>
        </div>
      </div>

      <div  className="cards">
        <MdOutlinePayments  size={35}/>
        <div>
          <h6>Payments and Payouts</h6>
          <p className="cardf">Review paymensts , payouts ,coupouns ,gift ,cards and taxes</p>
        </div>
      </div>

      <div  className="cards">
        <AiOutlineNotification size={35}/>
        <div>
          <h6>Notification</h6>
          <p className="cardf">Choose notification preference and how you want to be connected </p>
        </div>
      </div>

      <div  className="cards">
        <BsEyeSlash size={35}/>
        <div>
          <h6>Privacy and sharing</h6>
          <p className="cardf">Control connected apps , what you share and what you see it</p>
        </div>
      </div>

      <div  className="cards">
        <IoIosSwitch size={35}/>
        <div>
          <h6>Global preference</h6>
          <p className="cardf">Set your default language , currency and timezone</p>
        </div>
      </div>

      <div   className="cards">
        <MdCardTravel size={35}/>
        <div>
          <h6>Global preference</h6>
          <p className="cardf">Set your default language , currency and timezone</p>
        </div>
      </div>

      <div   className="cards">
        <MdOutlineBuild size={35}/>
        <div>
          <h6>Global preference</h6>
          <p className="cardf">Set your default language , currency and timezone</p>
        </div>
      </div>

      <div className="cards">
        <AiOutlineGift size={35}/>
        <div>
          <h6>Global preference</h6>
          <p className="cardf">Set your default language , currency and timezone</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
