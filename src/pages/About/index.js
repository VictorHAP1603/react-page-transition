import React from "react";
import Hero from "../../components/Hero";
import Image from "../../assets/images/img-2.jpg";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../../animation";
const About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={transition}
    >
      <Hero image={Image} title="Camelao" description="Camaleao dourado" />
      About
    </motion.div>
  );
};

export default About;
