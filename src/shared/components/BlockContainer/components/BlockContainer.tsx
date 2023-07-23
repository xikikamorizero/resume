import React,{useState, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  id?:string;
  anim?:boolean;
};

export const BlockContainer = ({ ...props }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3, // Когда как минимум 10% элемента станет видимым, будет вызван колбэк
  });

  useEffect(() => {
        setIsVisible(inView);
  }, [inView]);

  return <Container anim={isVisible} ref={ref} id={props.id}>{props.children}</Container>;
};

const Container = styled.div<{anim?:boolean}>`
  width: 100%;
  padding: 100px 0 100px 0;

  opacity: ${(props)=>props.anim? 1 : 0};

  transition: all 1s ease;
`;
