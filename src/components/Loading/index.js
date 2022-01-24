import React from "react";
import { LoadingContainer } from "./style";

const Loading = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.3, x: "100vw" }}
    />
  );
};

export default Loading;
