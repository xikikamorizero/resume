import React from "react";
import styled from "styled-components";
import { BlockContainer } from "../../../../shared";
import iconT from "../assets/telegram.svg";
import iconG from "../assets/github.svg";
import iconI from "../assets/instagram.svg";

export const Footer = () => {
  return (
    <BlockContainer>
      <Container>
        <IconContainer>
          <Icon icon={iconT} href={'https://t.me/xiki_mori'} target="_blank" />
          <Icon icon={iconI} href={'https://instagram.com/xikikamori_01?igshid=MzNlNGNkZWQ4Mg=='} style={{backgroundColor:'var(--white)', backgroundSize:'27px'}} target="_blank" />
          <Icon icon={iconG} href={'https://github.com/xikikamorizero'} target="_blank" />
        </IconContainer>
        <Text>© 2023 Kogai Artyom React Js Developer</Text>
      </Container>
    </BlockContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 30px;
`;
const Text = styled.div`
  font-size: 16px;
  line-height: 1.5em;
  color: var(--white);
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.a<{ icon?: string }>`
  width: 35px;
  height: 35px;

  cursor: pointer;

  border-radius: 50%;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
`;
