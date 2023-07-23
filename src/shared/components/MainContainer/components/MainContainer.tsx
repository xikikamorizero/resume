import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
