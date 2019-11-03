import React from 'react';
import ReactVR from "./ReactVR"

const getSection = (section) => {
  switch (section) {
    case "React VR":
      return <ReactVR />;
  
    default:
      return ReactVR;
  }
};

export default getSection;
