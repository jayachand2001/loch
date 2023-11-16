import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main"
import Test from "./Components/Test"

function App() {
  return (
    <BrowserRouter>
      <Main/>
      {/* <Test/> */}
    </BrowserRouter>
  );
}

export default App;
