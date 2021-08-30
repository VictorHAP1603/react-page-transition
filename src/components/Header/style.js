import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NavBar = styled.header`
  height: 60px;
  background-color: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;

  z-index: 1000;
`;

export const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

export const NavItems = styled.div``;

export const NavBarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
`;
