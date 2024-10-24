"use client";

import { DashboardPanel } from "./components/dashboard-panel/dashboardPanel";
import { Sidebar } from "./components/sidebar/sidebar";
import { Section } from "./styles";

const Dashboard = () => {
  return (
    <Section>
      <Sidebar />
      <DashboardPanel />
    </Section>
  );
};

export default Dashboard;
