"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = ({ children }: any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["-10%", "1%"]);

  return (
    <section ref={targetRef} className=" h-48  bg-slate-500">
      <div className="  flex h-58 items-center overflow-hidden">
        <motion.div
          style={{ x }}
          whileInView={"animate"}
          transition={{ delay: 10 }}
          className="flex gap-4"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
