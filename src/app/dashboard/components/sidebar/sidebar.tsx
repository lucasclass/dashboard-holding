"use client";

import { AccountToggle } from "./components/accountToggle";
import { Plan } from "./components/plan";
import { RouteSelect } from "./components/routeSelect";
import { Search } from "./components/search";
import { Container } from "./styles";

export const Sidebar = () => {
  return (
    <div>
      <Container>
        <AccountToggle />
        <Search />
        <RouteSelect />
      </Container>
      <Plan />
    </div>
  );
};
