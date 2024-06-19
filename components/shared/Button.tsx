"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = ({ label, className }: any) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef?.current?.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef?.current?.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef?.current?.addEventListener("mousemove", handleMouseMove);
    btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef?.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={`btn relative w-full max-w-[8rem] overflow-hidden rounded-lg bg-transparent px-3 py-[0.5rem] text-primary-100 ${className}`}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {label}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-16 w-16 -translate-x-[50%] -translate-y-[50%] rounded-full bg-primary-200"
      />
    </motion.button>
  );
};

export default SpotlightButton;
