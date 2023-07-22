import React from "react";
import styled from "styled-components";

type Props = {
    color?: string;
    text?:string;
    fontSize?:string;
}

export const Title =({...props}:Props)=>{
    return(
<Container color={props.color} fontSize={props.fontSize}>
{props.text}
</Container>
    )
}

const Container = styled.div<Props>`
    width: 100%;
    color: ${(props)=>props.color? props.color : 'var(--white)'};
    font-size: ${(props)=>props.fontSize? props.fontSize : '48px'};
    line-height: 1.2em;
`