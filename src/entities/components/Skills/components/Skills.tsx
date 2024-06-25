import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BlockContainer, Title, Text } from "../../../../shared";

export const Skills = () => {
    const { t } = useTranslation("global");
    return (
        <BlockContainer id={"skills"}>
            <Container>
                <Title text={t("skills.title")} />
                <ContainerGrid>
                    <ContainerSkill>
                        <Skill title={"HTML"} text={t("skills.html.text")} />
                        <Skill title={"CSS"} text={t("skills.css.text")} />
                        <Skill
                            title={"JavaScript"}
                            text={t("skills.js.text")}
                        />
                        <Skill
                            title={"TypeScript"}
                            text={t("skills.ts.text")}
                        />
                    </ContainerSkill>
                    <ContainerSkill>
                        <Skill
                            title={"React Js"}
                            text={t("skills.react.text")}
                        />
                        <Skill title={"Next Js"} text={t("skills.next.text")} />
                        <Skill title={"Redux"} text={t("skills.redux.text")} />
                        <Skill title={"MobX"} text={t("skills.mobx.text")} />
                    </ContainerSkill>
                </ContainerGrid>
            </Container>
        </BlockContainer>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;
const ContainerGrid = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 400px;
    
    @media (max-width: 1187px) {
        gap: 50px;
        justify-content: space-between;
    }
`;
const ContainerSkill = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

type Skill = {
    text?: string;
    title?: string;
};

const Skill = ({ ...props }: Skill) => {
    return (
        <SkillContainer>
            <Title text={props.title} fontSize={"26px"} fontSizeM={"22px"} />
            <Text>{props.text}</Text>
        </SkillContainer>
    );
};
const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
