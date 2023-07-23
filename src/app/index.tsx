import React, { useState } from "react";
import styled from "styled-components";
import { AboutMe, Main, Skills, Project, Footer } from "../entities";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import menu from "./assets/burger.svg";
import exit from "./assets/exit.svg";
import portfolio from "./assets/portfolio.png";
import contacts from "./assets/contacts.png";
import aboutMe from "./assets/aboutMe.png";
import skills from "./assets/skills.png";

const App = () => {
  const [burger, setBurger] = useState(true);
  return (
    <AppStyle>
      <Burger>
        <Line right={"34px"} rotate={"80deg"} top={"-29px"} rightM={"6px"} rotateM={"170deg"} topM={"-69px"}>
          <Item
            href={"#aboutMe"}
            transition={"0.25s"}
            rotate={"-80deg"}
            rotateM={"-170deg"}
            state={burger}
            icon={aboutMe}
            draggable={false}
          />
        </Line>
        <Line right={"14.6px"} rotate={"25deg"} top={"-4px"} rightM={"30px"} rotateM={"120deg"} topM={"-53px"}>
          <Item
            href={"#portfolio"}
            transition={"0.20s"}
            rotate={"-25deg"}
            rotateM={"-120deg"}
            state={burger}
            icon={portfolio}
            draggable={false}
          />
        </Line>
        <Line right={"-14.6px"} rotate={"-25deg"} top={"-4px"} rightM={"29px"} rotateM={"60deg"} topM={"-18px"}>
          <Item
            href={"#skills"}
            transition={"0.15s"}
            rotate={"25deg"}
            rotateM={"-60deg"}
            state={burger}
            icon={skills}
            draggable={false}
          />
        </Line>
        <Line right={"-34px"} rotate={"-80deg"} top={"-29px"} rightM={"6px"} rotateM={"10deg"} topM={"-1px"}>
          <Item
            href={"#contacts"}
            transition={"0.1s"}
            rotate={"80deg"}
            rotateM={"-10deg"}
            state={burger}
            icon={contacts}
            draggable={false}
          />
        </Line>
        <Control
          onClick={() => {
            setBurger(!burger);
          }}
          icon={burger ? exit : menu}
          state={burger}
        />
      </Burger>
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
        width={"450px"}
        widthM={"450px"}
        height={"600px"}
        heightM={"600px"}
        backgroundSize={"430px"}
        backgroundSizeM={"430px"}
        top={"55%"}
        topM={"55%"}
        right={"85%"}
        rightM={"60%"}
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

//
const Burger = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: fixed;
  top: 50px;
  right: 100px;
  z-index: 1;

  -moz-user-select: none;
-khtml-user-select: none;
user-select: none;  

  @media (max-width: 700px) {
    top: 70px;
  right: 50px;
  }
`;

type StyleProps = {
  right?: string;
  rightM?: string;
  rotate?: string;
  rotateM?: string;
  top?: string;
  topM?: string;
  state?: boolean;
  transition?: string;

  icon?: string;
};

const Line = styled.div<StyleProps>`
  width: 50px;
  height: 120px;
  border-radius: 30px;

  position: absolute;
  z-index: 0;
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  transform: rotate(${(props) => props.rotate});

  /* background-color: red; */

  @media (max-width: 700px) {
    top: ${(props) => props.topM};
    right: ${(props) => props.rightM};
    transform: rotate(${(props) => props.rotateM});
  }
`;
const Item = styled.a<StyleProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: white;

  position: absolute;
  top: ${(props) => (props.state ? "calc(100% - 50px)" : 0)};
  right: 0;

  cursor: pointer;
  transition: top ${(props) => props.transition} linear;

  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 35px;

  transform: rotate(${(props) => props.rotate});

  -moz-user-select: none;
-khtml-user-select: none;
user-select: none;  

  :hover {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }
  :active {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }

  @media (max-width: 700px) {
    transform: rotate(${(props) => props.rotateM});
  }
`;
const Control = styled.div<StyleProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: white;

  position: absolute;
  top: 0;
  right: 0;

  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px;

  -moz-user-select: none;
-khtml-user-select: none;
user-select: none;  

  cursor: pointer;

  -webkit-box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
    rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
    rgb(255, 255, 255);
  box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
    rgb(255, 255, 255);

  :hover {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }
  :active {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }
`;
//

export default App;
