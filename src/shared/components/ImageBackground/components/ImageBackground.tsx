import React from "react";
import styled from "styled-components";

type Props = {
  image?: string;
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  backgroundSize?: string;

  widthM?: string;
  heightM?: string;
  topM?: string;
  rightM?: string;
  backgroundSizeM?: string;
};

export const ImageBack = styled.div<Props>`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: url(${(props) => (props.image ? props.image : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => props.backgroundSize};

  @media (max-width: 700px) {
    width: ${(props) => props.widthM};
    height: ${(props) => props.heightM};
    background-size: ${(props) => props.backgroundSizeM};

    top: ${(props) => props.topM};
    right: ${(props) => props.rightM};
  }

  filter: drop-shadow(0px 0px 7px var(--shadow));
`;
