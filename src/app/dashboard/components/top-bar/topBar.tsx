import React from "react";
import {
  Container,
  DateButton,
  Section,
  TextSpan,
  TextSpanTwo,
} from "./styles/topbar";
import { FiCalendar } from "react-icons/fi";

export const TopBar = () => {
  return (
    <Section>
      <Container>
        <div>
          <TextSpan>Bom dia, Lucas!</TextSpan>
          <TextSpanTwo>Quarta, 23 Out 2024</TextSpanTwo>
        </div>
        <DateButton>
          <FiCalendar />
          <span>Prev 6 meses</span>
        </DateButton>
      </Container>
    </Section>
  );
};
