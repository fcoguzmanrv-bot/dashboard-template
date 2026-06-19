import Topbar from "@/components/Topbar";
import RevenueChart from "@/components/RevenueChart";
import TrafficChart from "@/components/TrafficChart";
import { stats, recentOrders } from "@/data/mock";

const statusStyles: Record<string, string> = {
  Paid: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
  Pending: "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400",
  Failed: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <Topbar title="Dashboard" />
      <main className="flex-1 p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className={`mt-1 text-xs font-medium ${stat.up ? "text-green-600" : "text-red-500"}`}>
                {stat.change} vs last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <TrafficChart />
        </div>

        {/* Recent orders */}
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white">Recent Orders</h3>
            <a href="/orders" className="text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400">View all</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  {["Order", "Customer", "Product", "Amount", "Status", "Date"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{order.product}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
