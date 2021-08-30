import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styled from "styled-components";

const Teste = styled(motion.div)`
  width: 40%;
  background-color: green;
  height: 100px;
  margin: 30px auto;
`;

const Page = ({ color, id }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  let animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      id={id}
      style={{ height: "100vh", backgroundColor: color, padding: "100px" }}
      //   initial={{ x: "-100vw" }}
      //   transition={{ type: "spring", duration: 1, bounce: 0.3 }}
    >
      <Teste animate={animation}>
        <h1>Teste</h1>
      </Teste>
      <Teste animate={animation}>
        <h1>Teste</h1>
      </Teste>
      <Teste animate={animation}>
        <h1>Teste</h1>
      </Teste>
    </div>
  );
};

export default Page;
