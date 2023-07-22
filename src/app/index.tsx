import React from "react";
import styled from "styled-components";
import { AboutMe, Main, Skills, Project, Footer } from "../entities";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";

const App = () => {
  return (
    <AppStyle>
      <ImageBack
        image={image1}
        width={"600px"}
        widthM={"400px"}
        height={"370px"}
        heightM={"300px"}
        backgroundSize={"600px"}
        backgroundSizeM={"400px"}
        top={"-100px"}
        topM={"-50px"}
        right={"-200px"}
        rightM={"-100px"}
      />
      <ImageBack
        image={image2}
        width={"600px"}
        widthM={"300px"}
        height={"600px"}
        heightM={"300px"}
        backgroundSize={"600px"}
        backgroundSizeM={"300px"}
        top={"25%"}
        topM={"30%"}
        right={"50"}
        rightM={"50"}
        style={{ zIndex: "-1" }}
      />
      <ImageBack
        image={image3}
        width={"600px"}
        widthM={"300px"}
        height={"600px"}
        heightM={"300px"}
        backgroundSize={"600px"}
        backgroundSizeM={"300px"}
        top={"85%"}
        topM={"90%"}
        right={"50"}
        rightM={"50"}
        style={{ zIndex: "-1" }}
      />
      <ImageBack
        image={image4}
        width={"400px"}
        widthM={"400px"}
        height={"600px"}
        heightM={"600px"}
        backgroundSize={"430px"}
        backgroundSizeM={"430px"}
        top={"55%"}
        topM={"55%"}
        right={"85%"}
        rightM={"85%"}
        style={{ zIndex: "-1" }}
      />
      <Container>
        <Main />
        <AboutMe />
        <Skills />
        <Project />
        <Footer />
      </Container>
    </AppStyle>
  );
};

type Props = {
  image?: string;
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  backgroundSize?: string;

  widthM?: string;
  heightM?: string;
  topM?: string;
  rightM?: string;
  backgroundSizeM?: string;
};
const AppStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
const Container = styled.div`
  width: 90%;
`;
const ImageBack = styled.div<Props>`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: url(${(props) => (props.image ? props.image : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => props.backgroundSize};

  @media (max-width: 700px) {
    width: ${(props) => props.widthM};
    height: ${(props) => props.heightM};
    background-size: ${(props) => props.backgroundSizeM};

    top: ${(props) => props.topM};
    right: ${(props) => props.rightM};
  }

  filter: drop-shadow(0px 0px 7px var(--shadow));
`;

export default App;
