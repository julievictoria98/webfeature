import React from "react";
import Lottie from "lottie-react";
import sparklingAnimation from "../../public/Animations/Sparkling.json";

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
      type: "loop",
      frames: [0, 121],
    },
  ],
};

const SparklingAnimation = () => {
  return (
    <Lottie
      animationData={sparklingAnimation}
      interactivity={interactivity}
    />
  );
};

export default SparklingAnimation;
