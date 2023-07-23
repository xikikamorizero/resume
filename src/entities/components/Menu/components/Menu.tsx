import React, {useState} from 'react';
import styled from 'styled-components';
import menu from "../assets/burger.svg";
import exit from "../assets/exit.svg";
import portfolio from "../assets/portfolio.png";
import contacts from "../assets/contacts.png";
import aboutMe from "../assets/aboutMe.png";
import skills from "../assets/skills.png";

export const Menu =()=>{
    const [burger, setBurger] = useState(false);

    const Click =()=>{
        setBurger(false);
    }
    return(
        <Burger>
        <Line right={"34px"} rotate={"80deg"} top={"-29px"} rightM={"6px"} rotateM={"170deg"} topM={"-69px"}>
          <Item
            href={"#aboutMe"}
            transition={"0.25s"}
            rotate={"-80deg"}
            rotateM={"-170deg"}
            state={burger}
            icon={aboutMe}
            draggable={false}
            onClick={()=>{Click()}}
          />
        </Line>
        <Line right={"14.6px"} rotate={"25deg"} top={"-4px"} rightM={"30px"} rotateM={"120deg"} topM={"-53px"}>
          <Item
            href={"#portfolio"}
            transition={"0.20s"}
            rotate={"-25deg"}
            rotateM={"-120deg"}
            state={burger}
            icon={portfolio}
            draggable={false}
            onClick={()=>{Click()}}
          />
        </Line>
        <Line right={"-14.6px"} rotate={"-25deg"} top={"-4px"} rightM={"29px"} rotateM={"60deg"} topM={"-18px"}>
          <Item
            href={"#skills"}
            transition={"0.15s"}
            rotate={"25deg"}
            rotateM={"-60deg"}
            state={burger}
            icon={skills}
            draggable={false}
            onClick={()=>{Click()}}
          />
        </Line>
        <Line right={"-34px"} rotate={"-80deg"} top={"-29px"} rightM={"6px"} rotateM={"10deg"} topM={"-1px"}>
          <Item
            href={"#contacts"}
            transition={"0.1s"}
            rotate={"80deg"}
            rotateM={"-10deg"}
            state={burger}
            icon={contacts}
            draggable={false}
            onClick={()=>{Click()}}
          />
        </Line>
        <Control
          onClick={() => {
            setBurger(!burger);
          }}
          icon={burger ? exit : menu}
          state={burger}
        />
      </Burger>
    )
}

const Burger = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: fixed;
  top: 50px;
  right: 100px;
  z-index: 1;

  -moz-user-select: none;
-khtml-user-select: none;
user-select: none;  

  @media (max-width: 700px) {
    top: 80px;
  right: 20px;
  }
`;

type StyleProps = {
  right?: string;
  rightM?: string;
  rotate?: string;
  rotateM?: string;
  top?: string;
  topM?: string;
  state?: boolean;
  transition?: string;

  icon?: string;
};

const Line = styled.div<StyleProps>`
  width: 50px;
  height: 120px;
  border-radius: 30px;

  position: absolute;
  z-index: 0;
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  transform: rotate(${(props) => props.rotate});

  /* background-color: red; */

  @media (max-width: 700px) {
    top: ${(props) => props.topM};
    right: ${(props) => props.rightM};
    transform: rotate(${(props) => props.rotateM});
  }
`;
const Item = styled.a<StyleProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: white;

  position: absolute;
  top: ${(props) => (props.state ? "calc(100% - 50px)" : 0)};
  right: 0;

  cursor: pointer;
  transition: top ${(props) => props.transition} linear;

  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 35px;

  transform: rotate(${(props) => props.rotate});

  -moz-user-select: none;
-khtml-user-select: none;
user-select: none;  

-webkit-tap-highlight-color: transparent;

  :hover {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }
  :active {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }

  @media (max-width: 700px) {
    transform: rotate(${(props) => props.rotateM});
  }
`;
const Control = styled.div<StyleProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: white;

  position: absolute;
  top: 0;
  right: 0;

  -webkit-tap-highlight-color: transparent;

  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px;

  -moz-user-select: none;
-khtml-user-select: none;
user-select: none;  

  cursor: pointer;

  -webkit-box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
    rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
    rgb(255, 255, 255);
  box-shadow: 0px 0px 10px ${(props) => (props.state ? "3px" : "0px")}
    rgb(255, 255, 255);

  :hover {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }
  :active {
    -webkit-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 3px rgb(255, 255, 255);
  }
`;