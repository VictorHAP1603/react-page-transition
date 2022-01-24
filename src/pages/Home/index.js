import React, { useEffect } from "react";
import Hero from "../../components/Hero";

import Image from "../../assets/images/img-1.jpg";
import { motion } from "framer-motion";
import { animation, transition } from "../../animation";
import Page from "../../components/Page";

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
