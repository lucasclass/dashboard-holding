import React from "react";
import {
  Container,
  LogOutButton,
  Section,
  TextSub,
  TextTitle,
} from "../styles/plan-styles";

export const Plan = () => {
  return (
    <Section>
      <Container>
        <div>
          <TextTitle>Enterprise</TextTitle>
          <TextSub>Pay as you go</TextSub>
        </div>

        <LogOutButton>Sair</LogOutButton>
      </Container>
    </Section>
  );
};
