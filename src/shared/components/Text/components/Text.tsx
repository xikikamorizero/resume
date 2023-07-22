import React from "react";
import styled from "styled-components";

type Props = {
    color?: string;
    fontSize?:string;
    children?:React.ReactNode;
}

export const Text =({...props}:Props)=>{
    return(
<Container color={props.color} fontSize={props.fontSize}>
    {props.children}
</Container>
    )
}

const Container = styled.div<Props>`
    width: 100%;
    color: ${(props)=>props.color? props.color : 'var(--textColorHeader)'};
    font-size: ${(props)=>props.fontSize? props.fontSize : '20px'};
    line-height: 1.5em;
`