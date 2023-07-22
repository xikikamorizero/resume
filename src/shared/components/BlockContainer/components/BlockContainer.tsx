import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  id?:string;
};

export const BlockContainer = ({ children, id }: Props) => {
  return <Container id={id}>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  padding: 100px 0 100px 0;
`;
