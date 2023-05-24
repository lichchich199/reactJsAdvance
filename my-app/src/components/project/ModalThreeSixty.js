//content.js
import React from "react";
import './modalThreeSixty.css'
import ThreeSixty from "react-360-view";
import { Link } from "react-router-dom";

// modal image 360
export default function ModalThreeSixty({ close, imagePath }) {
  return (
    <div className="test">
        <Link className="close" onClick={close}>
          &times;
          </Link>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
              <ThreeSixty
                  amount={100}
                  imagePath={imagePath}
                  fileName="output_{index}.jpeg"
                  spinReverse
              />
        </div>
      </div>
  );
}