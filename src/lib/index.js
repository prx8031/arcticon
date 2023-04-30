import React from "react";
import "./index.scss";


export const HelloWorld = () => {
  return (
    <div className="hello-wrapper">
      Hello world!
    </div>
  );
};

export const InputBox = () => {
  return(
    <div>
      <input />
    </div>
  )
}
export {Button} from "../components/Button/Button.js";
export {Card} from "../components/Card/Card.js";
export {Dropdown} from "../components/Dropdown/Dropdown.js";
export {Modal} from "../components/Modal/Modal.js";
export {Navbar} from "../components/Navbar/Navbar.js";
export {ProgressBar} from "../components/ProgressBar/ProgressBar.js";
export {Slider} from "../components/Slider/Slider.js";
export {ToggleSwitch} from "../components/ToggleSwitch/ToggleSwitch.js";
// export {Button} from "../components/Button/Button.js";
// export {Button} from "../components/Button/Button.js";
// export {Button} from "../components/Button/Button.js";
// export {Button} from "../components/Button/Button.js";
// export {Button} from "../components/Button/Button.js";
/*
    make components directory for better structuring and export everything here.
    export {HelloWorld} from "./components/hello";
    export {InputBox} from "./components/input";
*/