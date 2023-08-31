import React from "react";
import { useTranslation } from "react-i18next";
import { BlockContainer, Title } from "../../../../shared";
import styled from "styled-components";
import image1 from "../assets/project1.png";
import image2 from "../assets/project3.png";

export const Project = () => {
  const { t } = useTranslation("global");
  return (
    <BlockContainer id={'portfolio'}>
      <Container>
        <Title text={t("project.title")} />
        <ContainerGrid>
          <ProjectItem
          draggable={false}
            image={image1}
            href={"https://screen-realm.vercel.app/"}
            target="_blank"
          />
          <ProjectItem
           draggable={false}
            image={image2}
            href={"https://space-project-eta.vercel.app/"}
            target="_blank"
          />
        </ContainerGrid>
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
const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;

  @media (max-width:500px) {
    grid-template-columns: 1fr;
  }
`;
const ProjectItem = styled.a<{ image?: string }>`
  width: 100%;
  height: 24.8vw;
  border-radius: 15px;

  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  cursor: pointer;

  @media (max-width:1000px) {
    border-radius: 10px;
  }

  @media (max-width:500px) {
    height: 50.6vw;
  }
`;
