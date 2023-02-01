import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { colors } from "../../styles/colors";
import logo from "../../assets/logo.svg";
import { UserResponse, User } from "../../types/api-types/user";
import { useEffect, useState } from "react";

const transition = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
    },
};



const EditUser = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 820px)" });
    
    if (isTabletOrMobile) {
        return (
            <>
                <motion.div variants={transition} initial="hidden" animate="show">
                    <Container>
                        <SecondContainer>
                            <Img src="https://i.insider.com/5899ffcf6e09a897008b5c04?width=1000&format=jpeg&auto=webp" />
                            <Name>Pedro Alonso Feitosa</Name>
                        </SecondContainer>
                        <TopicContainer>
                            <TextIntro style={{ fontWeight: 700 }}>Informações de Perfil</TextIntro>
                            <InputGrid>
                                <InputContainer>
                                    <Input
                                        id={"id1"}
                                        placeholder="Nome"
                                        type="text"
                                        autoComplete="off"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Input
                                        id={"id1"}
                                        placeholder="Email"
                                        type="text"
                                        autoComplete="off"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Input
                                        id={"id2"}
                                        placeholder="Senha Antiga"
                                        type="password"
                                        autoComplete="off"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Input
                                        id={"id2"}
                                        placeholder="Nova Senha"
                                        type="password"
                                        autoComplete="off"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Input
                                        id={"id2"}
                                        placeholder="Nova Imagem"
                                        type=""
                                        autoComplete="off"
                                    />
                                </InputContainer>
                                <EnterBtn>Salvar as Alterações</EnterBtn>
                            </InputGrid>
                            <TextBack style={{ fontWeight: 700 }} href="/">Voltar</TextBack>
                        </TopicContainer>
                    </Container>
                </motion.div>
            </>
        );
    } else {
        return (
            <>
                <motion.div variants={transition} initial="hidden" animate="show">
                    <ContainerError>
                        <ErrorBox>
                            Poxa...ainda estamos desenvolvendo a versão para desktop
                            <br />
                            volte mais tarde 😀
                        </ErrorBox>
                    </ContainerError>
                </motion.div>
            </>
        );
    }
};

export default EditUser;

// DESKTOP MESSAGE
const ErrorBox = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;
`;

const ContainerError = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${colors.primaryBlack};
`;

// MOBILE / TABLET
const Container = styled.div``;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: 30px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 25px;
  margin: 0 auto;
  margin-top: 10px;
`;

// Second component

const SecondContainer = styled.div`
  padding: 30px 25px 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextIntro = styled.div`
    margin-bottom: 50px;
`;
const TextBack = styled.a`
    margin-top: 50px;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  border: 0;
  text-align: center;
  width: 100%;
  background: ${colors.secondBlue};
  padding: 0.25rem 0;
  margin: 1rem 0;
  color: ${colors.primaryWhite};
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
`;

const Button2 = styled.div`
  background: red;
  width: 100%;
`;

const TopicContainer = styled(SecondContainer)`
  padding-top: 10px;
  display: flex;
`;

const SeeMore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const TopicText = styled.div`
  width: fit-content;
  opacity: 0.85;
  :hover {
    opacity: 1;
  }
`;
const Logo = styled.img`
  width: fit-content;
  height: 18px;
  margin: 0 auto;
  display: block;
  background: transparent;
`;

const InputGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items:center;
  border-radius: 8px;
  background: ${colors.primaryWhite};
  -webkit-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
-moz-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
`;

const Input = styled.input`
display: flex;
font-size: 12px;
font-weight:700;
padding: 0.75rem 1.3rem ;
text-shadow: none;
background: transparent;
border: 0;
flex: 1 1 auto;
transition:0.3s;
color:${colors.primaryBlack};
line-height:25px;

&:focus {
  outline:none;
  color: ${colors.primaryBlue};
}

&:not(:focus) {
  color: ${colors.primaryBlue};
}

::placeholder {
    font-weight:400;
    opacity:0.5;
    color:${colors.primaryBlack};
}
`;

const EnterBtn = styled.div`
  color: ${colors.primaryWhite};
  background: ${colors.secondBlue};
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  margin: 2rem auto 0 auto;

  :hover {
    color: ${colors.secondBlue};
    background: transparent;
    outline: 1px solid ${colors.secondBlue};
  }
`;