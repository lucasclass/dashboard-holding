"use client";

import { useState } from "react";

import {
  Button,
  Container,
  ContainerForm,
  Content,
  ForgotPass,
  HeadContainer,
  HeadText,
  Input,
  InputContainer,
  Left,
  LineHead,
  Right,
  Section,
  SignContainer,
  SignUp,
  SignupText,
  Title,
} from "./styles/pages";

import { useLogin } from "./hooks/useLogin";

export default function Home() {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();
  const [isNewPassword, setIsNewPassword] = useState(false);

  const toggleForm = () => {
    setIsNewPassword(!isNewPassword);
  };

  return (
    <Section>
      <Container>
        <Content>
          <Left />
          <Right>
            <ContainerForm>
              {!isNewPassword ? (
                <>
                  <HeadContainer>
                    <HeadText>Já é cliente?</HeadText>
                    <Title>Acesse sua conta</Title>
                    <LineHead />
                  </HeadContainer>
                  <InputContainer>
                    <Input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                    <Button type="submit" onClick={handleLogin}>
                      Login
                    </Button>
                    <ForgotPass>Esqueceu sua senha?</ForgotPass>
                  </InputContainer>
                  <SignContainer>
                    <SignupText>Não possui cadastro?</SignupText>
                    <SignUp onClick={toggleForm}>
                      Crie seu cadastro aqui.
                    </SignUp>
                  </SignContainer>
                </>
              ) : (
                <>
                  <HeadContainer>
                    <HeadText>Cadastre-se aqui</HeadText>
                    <Title>Crie sua conta</Title>
                    <LineHead />
                  </HeadContainer>
                  <InputContainer>
                    <Input type="text" placeholder="Email" />
                    <Input type="password" placeholder="••••••••" />
                    <Input type="password" placeholder="Confirmar senha" />
                    <Button type="submit">Cadastrar</Button>
                    <ForgotPass>Esqueceu sua senha?</ForgotPass>
                  </InputContainer>
                  <SignContainer>
                    <SignupText>Já possui cadastro?</SignupText>
                    <SignUp onClick={toggleForm}>Logue aqui.</SignUp>
                  </SignContainer>
                </>
              )}
            </ContainerForm>
          </Right>
        </Content>
      </Container>
    </Section>
  );
}
