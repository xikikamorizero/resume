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
  display: flex;
  justify-content: start;
  align-items: center;
  gap:400px;

  @media (max-width: 1187px) {
    gap:50px;
    justify-content: space-between;
  }
`;
const ContainerSkill = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap:40px;

  /* background-color: red; */
`;

type Skill = {
  text?: string;
  title?: string;
};

const Skill = ({ ...props }: Skill) => {
  return (
    <SkillContainer>
      <Title text={props.title} fontSize={"26px"} fontSizeM={'22px'} />
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
