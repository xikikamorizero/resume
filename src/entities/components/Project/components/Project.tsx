import React from "react";
import { BlockContainer } from "../../../../shared";
import styled from "styled-components";
import image1 from '../assets/project1.png';
import image2 from '../assets/project2.png';

export const Project = () => {
  return (
    <BlockContainer>
      <Container>
        <ProjectItem image={image1} href={'https://screen-realm.vercel.app/'} target="_blank" />
        <ProjectItem image={image2} href={'https://fenix-sable.vercel.app/'} target="_blank" />
      </Container>
    </BlockContainer>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;
`;

const ProjectItem = styled.a<{image?:string}>`
  width: 100%;
  height: 24.8vw;
  border-radius: 15px;

  background-image: url(${(props)=>props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  cursor: pointer;
`;
