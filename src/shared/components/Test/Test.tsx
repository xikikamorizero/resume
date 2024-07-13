import React from "react";
import styled from "styled-components";
import { Test1 } from "./Test1";

export const Context = React.createContext({});

export const Test = ({ ...props }) => {
    const [data, setData] = React.useState(0);
    return (
        <Context.Provider value={{data, setData}}>
            <Container>
                <Test1 />
            </Container>
        </Context.Provider>
    );
};

const Container = styled.div`
    width: 600px;
    height: 600px;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
`;
