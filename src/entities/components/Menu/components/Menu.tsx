import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import portfolio from "../assets/portfolio.png";
import contacts from "../assets/contacts.png";
import aboutMe from "../assets/aboutMe.png";
import skills from "../assets/skills.png";
import { motion } from "framer-motion";

export const Menu = () => {
    const [burger, setBurger] = useState(false);

    const { t } = useTranslation("global");

    const Click = () => {
        setBurger(false);
    };
    return (
        <Burger
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 1 }}
        >
            <Line
                right={"34px"}
                rotate={"80deg"}
                top={"-29px"}
                rightM={"6px"}
                rotateM={"170deg"}
                topM={"-69px"}
            >
                <Item
                    title={t("menu.aboutMe")}
                    href={"#aboutMe"}
                    transition={"0.25s"}
                    rotate={"-80deg"}
                    rotateM={"-170deg"}
                    state={burger}
                    icon={aboutMe}
                    draggable={false}
                    onClick={() => {
                        Click();
                    }}
                />
            </Line>
            <Line
                right={"14.6px"}
                rotate={"25deg"}
                top={"-4px"}
                rightM={"30px"}
                rotateM={"120deg"}
                topM={"-53px"}
            >
                <Item
                    title={t("menu.portfolio")}
                    href={"#portfolio"}
                    transition={"0.20s"}
                    rotate={"-25deg"}
                    rotateM={"-120deg"}
                    state={burger}
                    icon={portfolio}
                    draggable={false}
                    onClick={() => {
                        Click();
                    }}
                />
            </Line>
            <Line
                right={"-14.6px"}
                rotate={"-25deg"}
                top={"-4px"}
                rightM={"29px"}
                rotateM={"60deg"}
                topM={"-18px"}
            >
                <Item
                    title={t("menu.skills")}
                    href={"#skills"}
                    transition={"0.15s"}
                    rotate={"25deg"}
                    rotateM={"-60deg"}
                    state={burger}
                    icon={skills}
                    draggable={false}
                    onClick={() => {
                        Click();
                    }}
                />
            </Line>
            <Line
                right={"-34px"}
                rotate={"-80deg"}
                top={"-29px"}
                rightM={"6px"}
                rotateM={"10deg"}
                topM={"-1px"}
            >
                <Item
                    title={t("menu.contacts")}
                    href={"#contacts"}
                    transition={"0.1s"}
                    rotate={"80deg"}
                    rotateM={"-10deg"}
                    state={burger}
                    icon={contacts}
                    draggable={false}
                    onClick={() => {
                        Click();
                    }}
                />
            </Line>
            <Control
                onMouseEnter={() => {
                    setBurger(true);
                }}
                onClick={() => {
                    setBurger(!burger);
                }}
                state={burger}
            >
                <Icon active={burger} />
            </Control>
        </Burger>
    );
};

const Burger = styled(motion.div)`
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
        top: 80px;
        right: 20px;
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

    background: var(--secondary);

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

    -webkit-tap-highlight-color: transparent;

    :hover {
        -webkit-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        -moz-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        box-shadow: 0px 0px 10px 3px var(--shadow_widget);
    }
    :active {
        -webkit-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        -moz-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        box-shadow: 0px 0px 10px 3px var(--shadow_widget);
    }

    @media (max-width: 700px) {
        transform: rotate(${(props) => props.rotateM});
    }
`;
const Control = styled.div<{ state: boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--secondary);

    position: absolute;
    top: 0;
    right: 0;

    -webkit-tap-highlight-color: transparent;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    cursor: pointer;

    -webkit-box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
        var(--shadow_widget);
    -moz-box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
        var(--shadow_widget);
    box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
        var(--shadow_widget);

    :hover {
        -webkit-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        -moz-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        box-shadow: 0px 0px 10px 3px var(--shadow_widget);
    }
    :active {
        -webkit-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        -moz-box-shadow: 0px 0px 10px 3px var(--shadow_widget);
        box-shadow: 0px 0px 10px 3px var(--shadow_widget);
    }
`;
const Icon = styled.div<{ active: boolean }>`
    width: 27px;
    height: 3px;
    background-color: var(--iconColor);
    position: relative;
    transition: transform 0.2s ease;

    border-radius: 15px;

    transform: rotate(${(props) => (props.active ? 45 : 0)}deg);

    &:before,
    &:after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: var(--iconColor);
        position: absolute;
        transition: transform 0.2s ease;
        border-radius: 15px;
    }

    &:before {
        top: ${(props) => (props.active ? 0 : -9)}px;
        transform: rotate(${(props) => (props.active ? 90 : 0)}deg);
    }

    &:after {
        bottom: ${(props) => (props.active ? 0 : -9)}px;
        transform: rotate(${(props) => (props.active ? 90 : 0)}deg);
    }
`;
