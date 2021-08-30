import React from "react";
import { Container, Section } from "./style";

const Hero = ({ image, title, description }) => {
  return (
    <Section img={image}>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Learn More</button>
      </Container>
    </Section>
  );
};

export default Hero;
