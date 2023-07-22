import React from "react";
import { BlockContainer, Title, Text } from "../../../../shared";
import styled from "styled-components";

export const AboutMe = () => {
  return (
    <BlockContainer>
      <Container>
        <Title text={'About Me'} />
        <TextContainer>
          <Text>
            A photographer with a unique perspective, Matt Perry captures
            Amsterdam’s vibrant streets and enchanting canals with an eye for
            detail. Matt’s love for the city and its diverse culture shines
            through his work, telling a visual story that’s vivid, colorful, and
            emotive.
          </Text>
          <Text>
            Born and raised in Amsterdam, Matt developed a passion for
            photography during his teenage years and went on to study the art in
            depth. He’s since built a reputation as a sought-after photographer,
            capturing precious moments and transforming spaces into works of
            art.
          </Text>
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
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 100px;

  @media (max-width: 911px) {
    gap:40px;
  }
`;