"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface BarChartProps {
  data: { date: string; calls: number }[];
}

export function BarChartComponent({ data }: BarChartProps) {
  const xAxisProps = {
    dataKey: "date",
    stroke: "#888888",
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    padding: { left: 10, right: 10 }
  };

  const yAxisProps = {
    stroke: "#888888",
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    tickFormatter: (value: number) => `${value}`,
    width: 40
  };

  const tooltipProps = {
    cursor: { fill: "rgba(0,0,0,0.05)" },
    contentStyle: { 
      background: "hsl(var(--background))",
      border: "1px solid hsl(var(--border))",
      borderRadius: "var(--radius)",
      padding: "8px"
    },
    labelStyle: {
      color: "hsl(var(--foreground))",
      fontWeight: 500,
      marginBottom: "4px"
    }
  };

  const barProps = {
    dataKey: "calls",
    fill: "hsl(var(--primary))",
    radius: [4, 4, 0, 0],
    maxBarSize: 50
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis {...xAxisProps} />
        <YAxis {...yAxisProps} />
        <Tooltip {...tooltipProps} />
        <Bar {...barProps} />
      </BarChart>
    </ResponsiveContainer>
  );
}