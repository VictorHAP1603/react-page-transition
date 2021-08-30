import React from "react";

import Image from "../../assets/images/img-3.jpg";
import Hero from "../../components/Hero";

import { animationThree, transition } from "../../animation/index";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
      transition={transition}
    >
      <Hero image={Image} title="Tucano" description="Tucano azul" />
      Services
    </motion.div>
  );
};

export default Services;
