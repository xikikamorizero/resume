import React from "react";
import { useTranslation } from "react-i18next";
import { BlockContainer, Title } from "../../../../shared";
import styled from "styled-components";
import image1 from "../assets/project1.png";
import image2 from "../assets/project3.png";
import { motion } from "framer-motion";

export const Project = () => {
    const { t } = useTranslation("global");
    return (
        <BlockContainer id={"portfolio"}>
            <Container>
                <Title text={t("project.title")} />
                <ContainerGrid>
                    <ProjectItem
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1 }}
                        draggable={false}
                        href={"https://screen-realm.vercel.app/"}
                        target="_blank"
                    >
                        <Image
                            src={image1}
                            alt={"screen-realm"}
                            draggable={false}
                        />
                    </ProjectItem>
                    <ProjectItem
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1 }}
                        draggable={false}
                        href={"https://space-project-eta.vercel.app/"}
                        target="_blank"
                    >
                        <Image
                            src={image2}
                            alt={"space-project"}
                            draggable={false}
                        />
                    </ProjectItem>
                </ContainerGrid>
            </Container>
        </BlockContainer>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
const ContainerGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vw;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;
const ProjectItem = styled(motion.a)`
    width: 100%;
`;
const Image = styled.img`
    width: 100%;
    border-radius: 15px;

    cursor: pointer;

    @media (max-width: 1000px) {
        border-radius: 10px;
    }
`;
