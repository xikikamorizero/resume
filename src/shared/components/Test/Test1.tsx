import React from "react";
import styled from "styled-components";
import { Test2 } from "./Test2";

export const Test1 = () => {
    return (
        <Container>
            <Test2 />
        </Container>
    );
};
const Container = styled.div`
    width: 500px;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ff06d6;
`;
