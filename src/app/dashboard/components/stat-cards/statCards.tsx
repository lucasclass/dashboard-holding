import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { Container, Content, Period, Title, TrendBadge, Value } from "./styles";

export const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Avg Order"
        value="$27.97"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Trailing Year"
        value="$278,054.24"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}) => {
  return (
    <Container>
      <Content>
        <div>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </div>

        <TrendBadge trend={trend}>
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
        </TrendBadge>
      </Content>

      <Period>{period}</Period>
    </Container>
  );
};
