import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MainContainer } from "../../../../shared";
import image from "../assets/image.jpg";
import icon1 from "../assets/download.png";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

export const Main = () => {
    const { t, i18n } = useTranslation("global");
    const controlsText = useAnimationControls();
    let title = t("main.title").split("");

    const Click = () => {
        if (i18n.language === "ru") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("ru");
        }
    };

    useEffect(() => {
        controlsText.start({ opacity: 0 });  
    }, [i18n.language]);

    const [isOpen, setIsOpen] = useState(true);

    return (
        <MainContainer>
            <Banner>
                <IconsContainer>
                    <Icons draggable={false} style={{ right: 0 }} />
                    <Icons
                        initial={{ x: -150, y: 0 }}
                        animate={isOpen?{ x: 4, y: 0 }:{}}
                        transition={{ type: "spring", delay: 0.5 }}
                        draggable={false}
                        image={image}
                        style={{ left: 0 }}
                    />
                </IconsContainer>
                <Title>
                    {title.map((a, i) => (
                        <motion.text
                            key={i}
                            initial={{
                                opacity: 0,
                            }}
                            animate={controlsText}
                            transition={{
                                duration: 0.5 + i / 40,
                                delay: 0,
                            }}
                        >
                            {a}
                        </motion.text>
                    ))}
                </Title>
                <ContainerButton>
                    <Download
                        href={process.env.PUBLIC_URL + "resume.pdf"}
                        download="resume.pdf"
                    >
                        {t("button.resume.down")}
                        <Icon src={icon1} />
                    </Download>
                    <LangBlock>
                        <Lang
                            anim={i18n.language === "ru"}
                            onClick={() => {
                                Click();
                            }}
                        >
                            {i18n.language}
                        </Lang>
                    </LangBlock>
                    {/* <AnimatePresence>
                        {isOpen && (
                            <MyCustomComponent
                                drag
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0}}
                                transition={{ duration: 2 }}
                                style={{ background: "#ffffff", width: "10px" }}
                            ></MyCustomComponent>
                        )}
                    </AnimatePresence> */}
                    {/* <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        OK
                    </button> */}
                </ContainerButton>
            </Banner>
        </MainContainer>
    );
};
const MyCustomComponent = styled(motion.div)<{ active?: string }>``;

const Banner = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
const Icons = styled(motion.div)<{ image?: string }>`
    position: absolute;
    top: 0;
    width: 128px;
    height: 128px;
    border-radius: 50%;

    background-color: var(--iconsColor);

    background-image: url(${(props) => (props.image ? props.image : "")});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 128px;
`;
const IconsContainer = styled.div`
    position: relative;
    width: 193px;
    height: 128px;
`;
const Title = styled.div`
    width: 100%;
    max-width: 1100px;
    min-height: 310px;
    color: var(--textColorHeader);
    font-size: 72px;
    line-height: 1.1em;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    @media (max-width: 700px) {
        font-size: 40px;
    }
`;
//
const ContainerButton = styled.div`
    display: flex;
    gap: 30px;
`;
const LangBlock = styled.div`
    position: relative;
    display: flex;
    width: 80px;
    height: 40px;
    border-radius: 22px;
    background-color: #b2b2c3c9;

    -webkit-box-shadow: 0px 0px 10px 2px rgb(255, 255, 255) inset;
    -moz-box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.978) inset;
    box-shadow: 0px 0px 10px 2px rgb(255, 255, 255) inset;
`;
const Lang = styled.div<{ anim: boolean }>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 0;
    left: ${(props) => (props.anim ? 0 : "calc(100% - 40px)")};
    background-color: var(--white);

    -webkit-tap-highlight-color: transparent;

    text-transform: uppercase;

    -webkit-box-shadow: 0px 0px 2px 1px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 2px 1px rgb(255, 255, 255);
    box-shadow: 0px 0px 2px 1px rgb(255, 255, 255);

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    transition: left 0.3s linear;

    cursor: pointer;
`;
const Download = styled.a`
    width: max-content;
    width: 120px;
    height: 40px;
    text-decoration: none;
    background-color: var(--white);
    color: black;

    -webkit-tap-highlight-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 22px;

    font-size: 18px;
    line-height: 1.5em;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    cursor: pointer;

    -webkit-box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.2);

    :active {
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    }
`;
const Icon = styled.img`
    width: 20px;
    height: 20px;
`;
