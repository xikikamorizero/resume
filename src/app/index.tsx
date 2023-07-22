import React from 'react';
import styled from 'styled-components';
import { AboutMe, Main, Skills, Project, Footer } from '../entities';

const App=()=>{
  return (
    <AppStyle>
  <Container>
    <Main />
    <AboutMe />
    <Skills />
    <Project />
    <Footer />
  </Container>
    </AppStyle>
  );
}

const AppStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    width: 90%;
`

export default App;