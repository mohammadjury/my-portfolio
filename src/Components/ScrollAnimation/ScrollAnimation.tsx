"use client";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
}

export default function ScrollAnimation(props: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  }, []);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100,
      }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
}
