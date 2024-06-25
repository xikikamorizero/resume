import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

export const Test = () => {
    // let datas = ["blue", "red", "green"]
    const [data, setData] = useState<string[]>([]);
    const [data1, setData1] = useState(false);

    const Click = () => {
        setData(["blue", "red", "green"]);
    };
    const Click2 = () => {
        setData(["black", "yellow"]);
    };

    const Click32 = () => {
        setData1(!data1);
    };


    return (
        <Container>
            {/* <ContainerGrid>
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
            <button onClick={Click2}>2</button> */}
            <motion.section
                style={{ height: "200px", width: "100%", background: "red", marginTop:'800px' }}
                initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                viewport={{amount:0.5}}
            >
                <div>
                    <motion.h1 initial={{x:-100}} animate={{x:0}}>Title</motion.h1>
                    <motion.p initial={{x:-100}} animate={{x:0}}> text test motion framer</motion.p>
                </div>
            </motion.section>
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

const Block = styled(motion.div)`
    width: 100%;
    height: 200px;
    background-color: #f00c0c;
    padding-bottom: 10px;
`;
