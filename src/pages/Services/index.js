import React from "react";

import Image from "../../assets/images/img-3.jpg";
import Hero from "../../components/Hero";

import { animation, transition } from "../../animation/index";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="end"
      variants={animation}
      transition={transition}
    >
      <Hero image={Image} title="Tucano" description="Tucano azul" />
      Services
    </motion.div>
  );
};

export default Services;
