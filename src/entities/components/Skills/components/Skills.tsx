import React from "react";
import { BlockContainer, Title, Text } from "../../../../shared";
import styled from "styled-components";

export const Skills = () => {
  return (
    <BlockContainer>
      <Container>
        <Title text={"Skills"} />
        <ContainerGrid>
          <ContainerSkill>
            <Skill
              title={"HTML"}
              text={"Создание современных и адаптивных сайтов"}
            />
            <Skill
              title={"CSS"}
              text={"Создание современных и адаптивных сайтов"}
            />
            <Skill
              title={"JavaScript"}
              text={"Создание современных и адаптивных сайтов"}
            />
            <Skill
              title={"TypeScript"}
              text={"Создание современных и адаптивных сайтов"}
            />
          </ContainerSkill>
          <ContainerSkill>
            <Skill
              title={"React Js"}
              text={"Создание современных и адаптивных сайтов"}
            />
            <Skill
              title={"Redux"}
              text={"Создание современных и адаптивных сайтов"}
            />
            <Skill
              title={"MobX"}
              text={"Создание современных и адаптивных сайтов"}
            />
            <Skill
              title={"Axios"}
              text={"Создание современных и адаптивных сайтов"}
            />
          </ContainerSkill>
        </ContainerGrid>
      </Container>
    </BlockContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  gap: 300px;

  @media (max-width: 781px) {
    gap:100px;
  }
`;
const ContainerSkill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:40px;
`;

type Skill = {
  text?: string;
  title?: string;
};

const Skill = ({ ...props }: Skill) => {
  return (
    <SkillContainer>
      <Title text={props.title} fontSize={"26px"} />
      <Text>{props.text}</Text>
    </SkillContainer>
  );
};
const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
