"use client";

import { Grid } from "../grid/grid";
import { TopBar } from "../top-bar/topBar";
import { Section } from "./styles";

export const DashboardPanel = () => {
  return (
    <Section>
      <TopBar />
      <Grid />
    </Section>
  );
};
