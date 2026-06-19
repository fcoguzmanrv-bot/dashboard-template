import Topbar from "@/components/Topbar";
import { recentOrders } from "@/data/mock";

const statusStyles: Record<string, string> = {
  Paid: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
  Pending: "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400",
  Failed: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400",
};

export default function OrdersPage() {
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <Topbar title="Orders" />
      <main className="flex-1 p-6 space-y-6">
        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Orders", value: "1,257", sub: "This month" },
            { label: "Revenue", value: "$48,295", sub: "This month" },
            { label: "Avg. Order Value", value: "$38.42", sub: "This month" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <p className="text-sm text-gray-500 dark:text-gray-400">{c.label}</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{c.value}</p>
              <p className="mt-1 text-xs text-gray-400">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white">All Orders</h3>
            <div className="flex gap-2">
              <select className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600 outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                <option>All Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
              <button className="rounded-full bg-violet-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-violet-700">
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  {["Order", "Customer", "Product", "Amount", "Status", "Date", ""].map((h, i) => (
                    <th key={i} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{h}</th>
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
                    <td className="px-6 py-4">
                      <button className="text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500">Showing 7 of 1,257 orders</p>
            <div className="flex gap-1">
              {[1, 2, 3, "...", 12].map((p, i) => (
                <button key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${p === 1 ? "bg-violet-600 text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
