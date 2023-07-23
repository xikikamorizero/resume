import React from "react";
import { useTranslation } from "react-i18next";
import { BlockContainer, Title, Text } from "../../../../shared";
import styled from "styled-components";

export const AboutMe = () => {
  const { t } = useTranslation("global");
  return (
    <BlockContainer id={"aboutMe"}>
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
