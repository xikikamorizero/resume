import React from "react";
import styled from "styled-components";
import { AboutMe, Main, Skills, Project, Footer, Menu } from "../entities";
import { ImageBack } from "../shared";
import image1 from "./assets/image1.png";
import image2 from "./assets/image4.png";
import { TestBurgerFramerMotion } from "../entities/components/FramerMotion/Burger";
import { Test } from "../entities/components/FramerMotion/Test";

const App = () => {
    return (
        <AppStyle>
            {/* <WrapperContainer> */}
                <Menu />
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
                    width={"450px"}
                    widthM={"450px"}
                    height={"600px"}
                    heightM={"600px"}
                    backgroundSize={"430px"}
                    backgroundSizeM={"430px"}
                    top={"50%"}
                    topM={"50%"}
                    style={{ left: "-200px" }}
                />
                <Container>
                    <Main />
                    <AboutMe />
                    <Skills />
                    <Project />
                    <Footer />

                    {/* <TestBurgerFramerMotion /> */}
                    {/* <Test /> */}
                </Container>
            {/* </WrapperContainer> */}
        </AppStyle>
    );
};
const WrapperContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow-x: hidden;
`;
const AppStyle = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow-x: hidden;
`;
const Container = styled.div`
    width: 90%;
    height: 100vh;
`;
export default App;
