import React from "react";
import styled from "styled-components";

type Props = {
  background?: boolean;
  children?: React.ReactNode;
};

export const HeaderContainer = ({ children, background }: Props) => {
  return <Container background={background}>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;

  transition: background-color 0.3s ease;

  background: ${({ background }: Props) =>
    background ? "black" : ""};

  @media (max-width: 700px) {
    padding: 0;
  }
`;
