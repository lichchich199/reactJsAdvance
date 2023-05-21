//content.js
import React from "react";
import './modal.css'
import ThreeSixty from "react-360-view";

export default ({ close, imagePath }) => (
    <div className="test">
      <a className="close" onClick={close}>
        &times;
      </a>
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