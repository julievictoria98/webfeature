import React from "react";
import Lottie from "lottie-react";
import starsAnimation from "../../public/Animations/Stars.json";

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0, 45],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [45, 300],
    },
  ],
};

const StarsAnimation = () => {
  return (
    <Lottie animationData={starsAnimation} interactivity={interactivity} />
  );
};

export default StarsAnimation;
