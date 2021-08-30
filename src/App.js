import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Routes from "./routes/index.routes";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
