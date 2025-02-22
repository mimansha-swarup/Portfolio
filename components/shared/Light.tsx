"use client";
import React from "react";
import { motion } from "framer-motion";

interface LightBallProps {
  height: string;
  width: string;
  blur: string;
  positionClass?: string;
}

const motionProps = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  viewport: { once: true },
  transition: { duration: 2.5, ease: "easeOut" },
};
const LightBall = ({
  height,
  width,
  blur,
  positionClass = "",
}: LightBallProps) => {
  return (
    <motion.div
      className={`absolute ${height} ${width} ${blur}  ${positionClass} light-ball  `}
      {...motionProps}
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
