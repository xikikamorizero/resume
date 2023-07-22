import React from "react";
import styled from "styled-components";
import { Button, MainContainer } from "../../../../shared";
import image from "../assets/IMG_20230102_191327_531.jpg";

export const Main = () => {
  return (
    <MainContainer>
      <Banner>
        <IconsContainer>
          <Icons draggable={false} style={{ right: 0 }} />
          <Icons draggable={false} image={image} style={{ left: 0 }} />
        </IconsContainer>
        <Title>Capturing Amsterdam’s Soul Through the Lens</Title>
        <Button
          width={"128px"}
          height={"40px"}
          color={"var(--white)"}
          text={"View Portfolio"}
          href={"#portfolio"}
        />
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
  max-width: 800px;
  color: var(--textColorHeader);
  font-size: 72px;
  line-height: 1.1em;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  @media (max-width: 700px) {
    font-size: 42px;
  }
`;