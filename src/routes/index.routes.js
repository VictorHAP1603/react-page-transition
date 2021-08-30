import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";

import { AnimatePresence } from "framer-motion";

const Routes = () => {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
