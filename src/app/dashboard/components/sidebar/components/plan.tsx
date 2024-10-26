import React from "react";
import {
  Container,
  LogOutButton,
  Section,
  TextSub,
  TextTitle,
} from "../styles/plan-styles";
import Link from "next/link";

export const Plan = () => {
  return (
    <Section>
      <Container>
        <div>
          <TextTitle>Enterprise</TextTitle>
          <TextSub>Pay as you go</TextSub>
        </div>

        <Link href="/">
          <LogOutButton>Sair</LogOutButton>
        </Link>
      </Container>
    </Section>
  );
};
