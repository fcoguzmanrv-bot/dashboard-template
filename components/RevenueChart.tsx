"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { revenueData } from "@/data/mock";

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Revenue vs Expenses</h3>
          <p className="text-sm text-gray-500">Last 12 months</p>
        </div>
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-400">
          +12.5% vs last year
        </span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e5e7eb" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#e5e7eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
          <Tooltip
            contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "13px" }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
          />
          <Legend />
          <Area type="monotone" dataKey="revenue" stroke="#7c3aed" strokeWidth={2} fill="url(#colorRevenue)" name="Revenue" />
          <Area type="monotone" dataKey="expenses" stroke="#d1d5db" strokeWidth={2} fill="url(#colorExpenses)" name="Expenses" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
