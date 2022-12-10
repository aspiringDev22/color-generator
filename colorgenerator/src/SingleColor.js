import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

// check the console why we need these props values
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  //   gives the rgb values of colors in array
  const bcg = rgb.join(",");
  //   console.log(bcg);
  // const hex=rgbToHex(...rgb) accesing hexcolors by use of function
  let hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexValue}</p>
      {alert && <p className="alert">Copied to ClipBoard</p>}
    </article>
  );
};

export default SingleColor;
