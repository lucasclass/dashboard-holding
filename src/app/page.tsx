"use client";

import Link from "next/link";

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
} from "./styles/pageMaster";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const toggleForm = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  return (
    <>
      <Section>
        <Container>
          <Content>
            <Left />
            <Right>
              <ContainerForm>
                {isForgotPassword ? (
                  <>
                    <HeadContainer>
                      <HeadText>Já é cliente?</HeadText>
                      <Title>Acesse sua conta</Title>
                      <LineHead />
                    </HeadContainer>
                    <InputContainer>
                      <Input type="text" placeholder="Email" />
                      <Input type="text" placeholder="Password" />
                      <Link href="/dashboard" passHref>
                        <Button type="submit">Login</Button>
                      </Link>
                      <ForgotPass>Esqueceu sua senha?</ForgotPass>
                      <button onClick={() => signIn("github")}>
                        Sign in with Github
                      </button>
                      <button onClick={() => signIn("google")}>
                        Sign in with Google
                      </button>
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
                      <Input type="text" placeholder="Password" />
                      <Link href="/dashboard" passHref>
                        <Button type="submit">Login</Button>
                      </Link>
                      <ForgotPass>Esqueceu sua senha?</ForgotPass>
                      <button onClick={() => signIn("github")}>
                        Sign in with Github
                      </button>
                      <button onClick={() => signIn("google")}>
                        Sign in with Google
                      </button>
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
    </>
  );
}
