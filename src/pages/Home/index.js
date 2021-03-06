import React from "react";
import Hero from "../../components/Hero";

import Image from "../../assets/images/img-1.jpg";
import { motion } from "framer-motion";
import { animation, transition } from "../../animation";

const Home = () => {
  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="end"
        variants={animation}
        transition={transition}
      >
        <Hero image={Image} title="Arara" description="arara azul" />
        Home
      </motion.div>
    </>
  );
};

export default Home;
