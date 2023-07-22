import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

export const BlockContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  padding: 100px 0 100px 0;
`;
