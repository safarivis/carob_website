"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Area,
} from "recharts";

interface ChartProps {
  data: Record<string, unknown>[];
  type?: "line" | "bar" | "area";
  xKey: string;
  yKeys: { key: string; color: string; name: string }[];
  height?: number;
  formatY?: (value: number) => string;
  formatX?: (value: string | number) => string;
}

const defaultColors = {
  primary: "#1a472a",
  secondary: "#8b5a2b",
  accent: "#3d8854",
  gray: "#9ca3af",
};

export function Chart({
  data,
  type = "line",
  xKey,
  yKeys,
  height = 300,
  formatY = (v) => `$${(v / 1000).toFixed(0)}K`,
  formatX = (v) => String(v),
}: ChartProps) {
  const commonProps = {
    data,
    margin: { top: 10, right: 10, left: 10, bottom: 10 },
  };

  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey={xKey}
              tickFormatter={formatX}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tickFormatter={formatY}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <Tooltip
              formatter={(value: number) => formatY(value)}
              contentStyle={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Legend />
            {yKeys.map((y) => (
              <Bar key={y.key} dataKey={y.key} fill={y.color} name={y.name} radius={[4, 4, 0, 0]} />
            ))}
          </BarChart>
        );

      case "area":
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey={xKey}
              tickFormatter={formatX}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tickFormatter={formatY}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <Tooltip
              formatter={(value: number) => formatY(value)}
              contentStyle={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Legend />
            {yKeys.map((y) => (
              <Area
                key={y.key}
                type="monotone"
                dataKey={y.key}
                stroke={y.color}
                fill={y.color}
                fillOpacity={0.1}
                name={y.name}
              />
            ))}
          </AreaChart>
        );

      default:
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey={xKey}
              tickFormatter={formatX}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tickFormatter={formatY}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <Tooltip
              formatter={(value: number) => formatY(value)}
              contentStyle={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Legend />
            {yKeys.map((y) => (
              <Line
                key={y.key}
                type="monotone"
                dataKey={y.key}
                stroke={y.color}
                strokeWidth={2}
                dot={{ fill: y.color, strokeWidth: 2 }}
                name={y.name}
              />
            ))}
          </LineChart>
        );
    }
  };

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
}

export { defaultColors };
