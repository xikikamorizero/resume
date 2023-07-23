import React from "react";
import { BlockContainer, Title, Text } from "../../../../shared";
import styled from "styled-components";

export const Skills = () => {
  return (
    <BlockContainer id={'skills'}>
      <Container>
        <Title text={"Skills"} />
        <ContainerGrid>
          <ContainerSkill>
            <Skill title={"HTML"} text={"The basis for any website"} />
            <Skill title={"CSS"} text={"Enliven any project and add color"} />
            <Skill
              title={"JavaScript"}
              text={"Allows you to create interactive web pages"}
            />
            <Skill
              title={"TypeScript"}
              text={"Structures the project and makes any code clearer"}
            />
          </ContainerSkill>
          <ContainerSkill>
            <Skill
              title={"React Js"}
              text={"A library that takes websites to the next level"}
            />
            <Skill
              title={"Redux"}
              text={"Required for client-side data management"}
            />
            <Skill title={"MobX"} text={"Suitable for small but fast sites"} />
            <Skill
              title={"Axios"}
              text={"Helps when using Rest API requests"}
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
  gap: 400px;

  @media (max-width: 1187px) {
    gap: 50px;
    justify-content: space-between;
  }
`;
const ContainerSkill = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* background-color: red; */
`;

type Skill = {
  text?: string;
  title?: string;
};

const Skill = ({ ...props }: Skill) => {
  return (
    <SkillContainer>
      <Title text={props.title} fontSize={"26px"} fontSizeM={"22px"} />
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
