import React from "react";
import Lottie from "react-lottie-player";
import lottieFile from "../assets/404 Error Page.json";

const NotFound = () => {
  return (
    <Lottie
      loop
      animationData={lottieFile}
      play
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default NotFound;
