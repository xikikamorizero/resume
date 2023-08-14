import React, { Suspense, useState } from "react";
import styled from "styled-components";
import {
    AboutMe,
    Main,
    Skills,
    Project,
    Footer,
    Menu,
    Background,
} from "../entities";

const App = () => {

  const handleDownload = () => {
    // Создаем ссылку на файл
    const fileUrl = '/assets/resume.pdf';
    
    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf'; // Указываем имя файла для скачивания
    link.click();
  }
    return (
        <AppStyle>
            <Menu />
            <Background />
            <Container>
                <Main />
                <AboutMe />
                <Skills />
                <Project />
                <button onClick={handleDownload}>Скачать файл</button>
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

    overflow-x: hidden;
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

const Test = styled.div`
    width: 100%;
    height: 100px;
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
`;
export default App;
