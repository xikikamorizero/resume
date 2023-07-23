import React from "react";
import { useTranslation } from "react-i18next";
import { BlockContainer, Title, Text, ImageBack } from "../../../../shared";
import styled from "styled-components";
import image2 from "../assets/image2.png";

export const AboutMe = () => {
  const { t } = useTranslation("global");
  return (
    <BlockContainer id={"aboutMe"}>
         <ImageBack
        image={image2}
        width={"600px"}
        widthM={"300px"}
        height={"600px"}
        heightM={"300px"}
        backgroundSize={"600px"}
        backgroundSizeM={"300px"}
        top={"50%"}
        topM={"50%"}
        right={"50%"}
        rightM={"50%"}
        style={{ zIndex:'-1', transform: 'translate(-50%, -40%)', left:'50%' }}
      />
      <Container>
        <Title text={t("aboutMe.title")} />
        <TextContainer>
          <Text>{t("aboutMe.text1")}</Text>
          <Text>{t("aboutMe.text2")}</Text>
        </TextContainer>
      </Container>
    </BlockContainer>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const TextContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 100px;

  @media (max-width: 911px) {
    gap: 40px;
  }
`;
