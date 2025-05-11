import styled, { ThemeProvider } from "styled-components"
import {darkTheme} from './utils/Themes'
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    width: 100%;
    overflow-x: hidden;
    position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <NavBar />
      <Body>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      </Body>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
