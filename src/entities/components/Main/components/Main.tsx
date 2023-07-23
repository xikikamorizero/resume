import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button, MainContainer } from "../../../../shared";
import image from "../assets/IMG_20230102_191327_531.jpg";

export const Main = () => {
  const { t, i18n } = useTranslation("global");
  const [lang, setLang] = useState("ru");

  const Click =()=>{
    if(lang==='ru'){
      setLang("en")
    }
    else{
      setLang("ru")
    }
  }

  useEffect(()=>{
    i18n.changeLanguage(lang);
  },[lang])
  return (
    <MainContainer>
      <Banner>
        <IconsContainer>
          <Icons draggable={false} style={{ right: 0 }} />
          <Icons draggable={false} image={image} style={{ left: 0 }} />
        </IconsContainer>
        <Title>{t("main.title")}</Title>
        <ContainerButton>
          <Button
            width={"128px"}
            height={"40px"}
            color={"var(--white)"}
            text={t("main.button")}
            href={"#portfolio"}
          />
          <LangBlock>
            <Lang anim={lang==='ru'} onClick={()=>{Click()}}>{lang}</Lang>
          </LangBlock>
        </ContainerButton>
      </Banner>
    </MainContainer>
  );
};

const Banner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Icons = styled.div<{ image?: string }>`
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
  max-width: 1000px;
  min-height: 250px;
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
  border-radius: 22px;
  background-color: #b2b2c3c9;

  -webkit-box-shadow: 0px 0px 10px 2px rgb(255, 255, 255) inset;
  -moz-box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.978) inset;
  box-shadow: 0px 0px 10px 2px rgb(255, 255, 255) inset;
`;
const Lang = styled.div<{anim:boolean}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  left: ${(props)=>props.anim? 0 : 'calc(100% - 40px)'} ;
  background-color: var(--white);

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
