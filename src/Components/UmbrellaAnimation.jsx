import React from "react";
import Lottie from "lottie-react";
import umbrellaAnimation from "../../public/Animations/Umbrella.json";

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "seek",
      frames: [45, 300],
    },
  ],
};

const UmbrellaAnimation = () => {
  return (
    <Lottie
      animationData={umbrellaAnimation}
      interactivity={interactivity}
    />
  );
};

export default UmbrellaAnimation;