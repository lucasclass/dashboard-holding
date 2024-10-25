import { Section } from "./styles";
import { StatCards } from "../stat-cards/statCards";
import { ActivityGraph } from "../activity-graph/activityGraph";
import { UsageRadar } from "../usage-radar/usageRadar";

export const Grid = () => {
  return (
    <Section>
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
    </Section>
  );
};
