import React from "react";

import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";
import { ButtonNav, Container } from "../styles/route-styles";

export const RouteSelect = () => {
  return (
    <Container>
      <Route IconNav={FiHome} selected={true} title="Dashboard" />
      <Route IconNav={FiUsers} selected={false} title="Team" />
      <Route IconNav={FiPaperclip} selected={false} title="Invoices" />
      <Route IconNav={FiLink} selected={false} title="Integrations" />
      <Route IconNav={FiDollarSign} selected={false} title="Finance" />
    </Container>
  );
};

const Route = ({
  selected,
  IconNav,
  title,
}: {
  selected: boolean;
  IconNav: React.ElementType; // Alterado para React.ElementType
  title: string;
}) => {
  return (
    <ButtonNav selected={false}>
      <IconNav style={{ color: selected ? "#6489fa" : "" }} />{" "}
      <span>{title}</span>
    </ButtonNav>
  );
};
