import React, { ReactElement } from "react";
import "./HeroSVG.css";
import HeroImg from "./heroImg2.png";
import useWindowDimension from "../../../Utils/GetWidth";
interface Props {}

function HeroSVG({}: Props): ReactElement {
  const width = useWindowDimension().width;
  return (
    <div className="HeroSVG">
      {/* <iframe
        src="https://my.spline.design/primitivescopy-972912560bf91a1b9f779b9bfb2a503f/"
        frameborder="2"
        width="426px"
        height="300px"
      ></iframe> */}
      {/* <iframe
        src="https://my.spline.design/primitivescopycopy-d0654193c210e695bbffa718b3dce091/"
        frameBorder="0"
        width="560px"
        height="410px"
      ></iframe> */}
      <img src={HeroImg} width={width < 890 ? "280px" : ""} />
    </div>
  );
}

export default HeroSVG;
