import React from "react";
import styled from "styled-components";
import { Test3 } from "./Test3";
import { Context } from "./Test";

export const Test2 = () => {
    let a = React.useContext(Context);
    return (
        <Container>
            {/* {a} */}
            <Test3 />
        </Container>
    );
};

const Container = styled.div`
    width: 400px;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #0048ff;
`;
