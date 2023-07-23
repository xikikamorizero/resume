import React from "react";
import styled from "styled-components";
import { ImageBack } from "../../../../shared";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

export const Background = () => {
  return (
    <Container>
      <ImageBack
        image={image1}
        width={"600px"}
        widthM={"400px"}
        height={"370px"}
        heightM={"300px"}
        backgroundSize={"600px"}
        backgroundSizeM={"400px"}
        top={"-100px"}
        topM={"-50px"}
        right={"-200px"}
        rightM={"-100px"}
      />
      <ImageBack
        image={image4}
        width={"450px"}
        widthM={"450px"}
        height={"600px"}
        heightM={"600px"}
        backgroundSize={"430px"}
        backgroundSizeM={"430px"}
        top={"55%"}
        topM={"55%"}
        style={{left:'-200px'}}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;
