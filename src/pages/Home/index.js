import React, { useEffect } from "react";
import Hero from "../../components/Hero";

import Image from "../../assets/images/img-1.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animation";
import Page from "../../components/Page";

const Home = () => {
  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}
        transition={transition}
      >
        <Hero image={Image} title="Arara" description="arara azul" />
        Home
      </motion.div>
      <Page color="red" />

      <Page color="blue" />
    </>
  );
};

export default Home;
