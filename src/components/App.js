import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Container from 'components/Container/Container'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');
    font-family: 'Work Sans', sans-serif;
  }
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles test="GlobalStyles" />
      <>
        <Container />
      </>
    </BrowserRouter>
  );
}

export default App;
