"use client";

import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ContainerRadar, ContentRadar, Section, TitleRadar } from "./styles";

const data = [
  {
    feature: "Tracking",
    mobile: 15,
    desktop: 110,
    max: 150,
  },
  {
    feature: "Builder",
    mobile: 130,
    desktop: 90,
    max: 150,
  },
  {
    feature: "Schedule",
    mobile: 86,
    desktop: 130,
    max: 150,
  },
  {
    feature: "AI Train",
    mobile: 125,
    desktop: 40,
    max: 150,
  },
  {
    feature: "Interval",
    mobile: 148,
    desktop: 90,
    max: 150,
  },
];

export const UsageRadar = () => {
  return (
    <Section>
      <ContainerRadar>
        <TitleRadar>
          <FiEye /> Usage
        </TitleRadar>
      </ContainerRadar>

      <ContentRadar>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="feature" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mobile"
              dataKey="mobile"
              stroke="#18181b"
              fill="#18181b"
              fillOpacity={0.2}
            />
            <Radar
              name="Desktop"
              dataKey="desktop"
              stroke="#5b21b6"
              fill="#5b21b6"
              fillOpacity={0.2}
            />
            <Tooltip />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </ContentRadar>
    </Section>
  );
};
