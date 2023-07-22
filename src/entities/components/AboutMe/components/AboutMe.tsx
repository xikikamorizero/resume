import React from "react";
import { BlockContainer, Title, Text } from "../../../../shared";
import styled from "styled-components";

export const AboutMe = () => {
  return (
    <BlockContainer>
      <Container>
        <Title text={"About Me"} />
        <TextContainer>
          <Text>
            Hello! My name is Kogay Artyom and I am a dedicated and passionate
            junior React.js developer with a passion for building dynamic and
            usable web applications. My web development journey began with a
            desire to turn creative ideas into functional realities. I love
            experimenting with the latest technologies and strive to provide
            amazing user experience with clean and efficient code.
          </Text>
          <Text>
            When I was introduced to React.js, the world of web development
            opened up a lot of possibilities for me. The ability to create
            components, reuse code, and efficiently manage application state
            just blew me away. Since my first steps with React.js, I have been
            constantly deepening my knowledge by studying the documentation,
            reviewing tutorials, and working on my own projects.
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 100px;

  @media (max-width: 911px) {
    gap: 40px;
  }
`;
