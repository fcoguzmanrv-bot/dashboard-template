"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { trafficData } from "@/data/mock";

const COLORS = ["#7c3aed", "#a78bfa", "#c4b5fd", "#ede9fe"];

export default function TrafficChart() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
        <p className="text-sm text-gray-500">This month</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={trafficData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={3}>
            {trafficData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, ""]} contentStyle={{ borderRadius: "12px", fontSize: "13px" }} />
          <Legend formatter={(value) => <span style={{ fontSize: 12, color: "#6b7280" }}>{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
