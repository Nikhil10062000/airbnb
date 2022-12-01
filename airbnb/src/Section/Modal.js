import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./Modal.css";
const Modals = ({ show, setShow }) => {
  return (
    <div>
      <Modal show={show} className="modalview">
        <Modal.Header>
          <Modal.Title>
            <AiOutlineClose
              onClick={() => setShow(false)}
              size={18}
              className="AiOutlineClose"
            />
          </Modal.Title>
          <Modal.Title>
            <h6 className="lgtitle">Log in or sign up</h6>
          </Modal.Title>
        </Modal.Header>

        <div>
          <Modal.Body scrollable>
            <div className="flowmodal">
              <h4>Welcome to Airbnb</h4>
              <p>
                <Form.Control size="lg" type="text" placeholder="Large text" />

                <Form.Control size="lg" type="text" placeholder="Large text" />

                <p className="policy">
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply. Privacy Policy
                </p>
                <br />
                <Button className="continue mdlbtn">Continue</Button>
                <br />
                <div>
                  <Button variant="light" className="mdlbtn  facebook">
                    <BsFacebook className="item1 fbook " size={24} />
                    <p className="item2">Continue with facebook</p>
                  </Button>{" "}
                  <Button variant="light" className="mdlbtn facebook">
                    <FcGoogle className="item1 " size={24} />
                    <p className="item2">Continue with Google</p>
                  </Button>{" "}
                  <Button variant="light" className="mdlbtn facebook">
                    <BsApple className="item1" size={24} />
                    <p className="item2">Continue with Apple</p>
                  </Button>{" "}
                  <Button variant="light" className="mdlbtn facebook">
                    <AiOutlineMail className="item1" size={24} />
                    <p className="item2">Continue with Email</p>
                  </Button>{" "}
                </div>
              </p>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default Modals;
