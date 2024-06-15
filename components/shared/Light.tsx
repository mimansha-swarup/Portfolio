import React from "react";

interface LightBallProps {
  height: string;
  width: string;
  blur: string;
  positionClass?: string;
}
const LightBall = ({
  height,
  width,
  blur,
  positionClass = "",
}: LightBallProps) => {
  return (
    <div
      // className={`absolute h-[${radius}] w-[${radius}] ${positionClass} blur-[${blur}] light-ball  `}
      className={`absolute ${height} ${width} ${blur}  ${positionClass} light-ball  `}
    />
  );
};

export default LightBall;

// position: absolute;
// width: 500px;
// height: 500px;
// left: 1013px;
// top: -26px;

// background: radial-gradient(50% 50% at 50% 50%, #968C7E 0%, #B7AB98 100%);
// filter: blur(250px);
