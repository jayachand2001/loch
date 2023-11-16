import React from "react";
import "./Notifications.css";
import bellicon from "../assests/Bell.svg";
import eyeicon from "../assests/Eye.svg";
import Cohorts from "../assests/Cohorts1.png";
import bellicon2 from "../assests/bell2.svg";
import barchart from "../assests/bar-chart-2.svg";
import tick from "../assests/icon.svg";
import traingledown from "../assests/triangle-down.svg";
import clock from "../assests/clock.svg";
import { useState } from "react";

export default function Notifications() {
  const [buttonText, setButtonText] = useState("David");

  const handleHoverEnter = () => {
    setButtonText("hello@gmail.com");
  };

  const handleHoverLeave = () => {
    setButtonText("David");
  };
  return (
    <div>
      <div className="sub_container1">
        <div className="content1">
          <img src={bellicon} alt="Bell" />
          <p className="one">
            Get notified when a highly correlated whale makes a move
          </p>
          <p className="two">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div></div>
        {/* <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="icons">
                <img src={bellicon2} alt="Bell" />
                <p className="text" style={{ fontSize: 9.1 }}>
                  Save
                </p>
              </div>
              <p className="text" style={{ fontSize: 14 }}>
                We’ll be sending notifications to you here
              </p>
              <button
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                {buttonText}
              </button>
            </div>
            <div className="slide">
              <div className="icons">
                <img src={barchart} alt="barchart" />
                <img
                  style={{
                    borderRadius: 4.2,
                    background: "#0071E3",
                    width: 14,
                    height: 14,
                  }}
                  src={tick}
                  alt="tick"
                />
              </div>
              <p className="text" style={{ fontSize: 11.2 }}>
                Notify me when any wallets move more than
              </p>
              <div style={{ display: "flex" }}>
                <p className="text" style={{ fontSize: 9.1 }}>
                  $1,000.00
                </p>
                <img src={traingledown} alt="triangledown" />
              </div>
            </div>
            <div className="slide">
              <div className="icons">
                <img src={clock} alt="clock" />
                <img
                  style={{
                    borderRadius: 4.2,
                    background: "#0071E3",
                    width: 14,
                    height: 14,
                  }}
                  src={tick}
                  alt="tick"
                />
              </div>
              <p className="text" style={{ fontSize: 11.2 }}>
                Notify me when any wallet dormant for
              </p>
              <div style={{ display: "flex" }}>
                <p className="text" style={{ fontSize: 9.1 }}>
                  {`<`} 30 days
                </p>
                <img src={traingledown} alt="triangledown" />
              </div>
              <p className="text" style={{ fontSize: 11.2 }}>
                becomes active
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <div className="sub_container2">
        <div>
          <img
            style={{ width: 335, height: 306, borderRadius: 12 }}
            src={Cohorts}
            alt="Cohorts"
          />
        </div>
        <div className="content2">
          <div>
            <img className="eye" src={eyeicon} alt="Eye" />
          </div>
          <p className="three">Watch what the whales are doing</p>
          <p className="four">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>
    </div>
  );
}
