"use client";

import { TransactionsList } from "@/app/components/transactionsList";
import { Grid } from "../grid/grid";
import { TopBar } from "../top-bar/topBar";
import { Section } from "./styles";

export const DashboardPanel = () => {
  return (
    <Section>
      <TopBar />
      <Grid />
      <TransactionsList />
    </Section>
  );
};
