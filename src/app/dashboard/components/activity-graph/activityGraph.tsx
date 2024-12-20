"use client";

import React from "react";
import { FiUser } from "react-icons/fi";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

import {
  ContainerAtivity,
  ContainerGraph,
  Section,
  TitleActivity,
} from "./styles";

const data = [
  {
    name: "Jan",
    Returning: 275,
    New: 41,
  },
  {
    name: "Feb",
    Returning: 620,
    New: 96,
  },
  {
    name: "Mar",
    Returning: 202,
    New: 192,
  },
  {
    name: "Apr",
    Returning: 500,
    New: 50,
  },
  {
    name: "May",
    Returning: 355,
    New: 400,
  },
  {
    name: "Jun",
    Returning: 875,
    New: 200,
  },
  {
    name: "Jul",
    Returning: 700,
    New: 205,
  },
];

export const ActivityGraph = () => {
  return (
    <Section>
      <ContainerAtivity>
        <TitleActivity>
          <FiUser /> Activity
        </TitleActivity>
      </ContainerAtivity>

      <ContainerGraph>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -24,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="#e4e4e7" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ right: 4 }}
            />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="New"
              stroke="#18181b"
              fill="#18181b"
            />
            <Line
              type="monotone"
              dataKey="Returning"
              stroke="#5b21b6"
              fill="#5b21b6"
            />
          </LineChart>
        </ResponsiveContainer>
      </ContainerGraph>
    </Section>
  );
};
