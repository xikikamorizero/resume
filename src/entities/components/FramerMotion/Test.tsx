import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

export const Test = () => {
    // let datas = ["blue", "red", "green"]
    const [data, setData] = useState<string[]>([]);

    const Click = () => {
        setData(["blue", "red", "green"]);
    };
    const Click2 = () => {
        setData(["black", "yellow"]);
    };

    return (
        <Container>
    
                <ContainerGrid>
                <AnimatePresence>
                    {data.map((a, i) => (
                        <Item
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1,}}
                            key={i}
                            color={a}
                        />
                    ))}
                     </AnimatePresence>
                </ContainerGrid>
           
            <button onClick={Click}>1</button>
            <button onClick={Click2}>2</button>
        </Container>
    );
};

const Container = styled(motion.div)`
    width: 100%;
    background-color: white;
    min-height: 400px;
`;
const ContainerGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const Item = styled(motion.div)<{ color: string }>`
    width: 100%;
    height: 10vw;
    background-color: ${(props) => props.color};
`;
