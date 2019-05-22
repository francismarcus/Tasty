import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');
    font-family: 'Work Sans', sans-serif;
  }
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <>
        // Content here
      </>
    </BrowserRouter>
  );
}

export default App;
