import React from "react";
import styled from "styled-components";

type Props = {
  color?: string;
  width?: string;
  height?: string;
  text?: string;
  href?:string;
};

export const Button = ({ ...props }: Props) => {
  return (
    <Container draggable={false} href={props.href} width={props.width} height={props.height} color={props.color}>
      <Text>{props.text}</Text>
    </Container>
  );
};

const Container = styled.a<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 22px;

  background-color: ${(props) => props.color};

  text-decoration: none;

  cursor: pointer;

  -webkit-box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.2);

  :active {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;
const Text = styled.div<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "var(--main)")};
  font-size: 18px;
  line-height: 1.5em;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
