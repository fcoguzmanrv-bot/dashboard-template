import Topbar from "@/components/Topbar";
import { customers } from "@/data/mock";

export default function CustomersPage() {
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <Topbar title="Customers" />
      <main className="flex-1 p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Customers", value: "3,842", change: "+8.1%" },
            { label: "Active", value: "3,201", change: "+5.4%" },
            { label: "Churned", value: "641", change: "-2.3%" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <p className="text-sm text-gray-500 dark:text-gray-400">{c.label}</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{c.value}</p>
              <p className="mt-1 text-xs font-medium text-green-600">{c.change} this month</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white">All Customers</h3>
            <div className="flex gap-2">
              <select className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600 outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                <option>All Plans</option>
                <option>Starter</option>
                <option>Pro</option>
                <option>Business</option>
              </select>
              <button className="rounded-full bg-violet-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-violet-700">
                + Add Customer
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  {["Customer", "Email", "Plan", "Total Spend", "Joined", "Status", ""].map((h, i) => (
                    <th key={i} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {customers.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-950">
                          <span className="text-xs font-semibold text-violet-700 dark:text-violet-400">
                            {c.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{c.email}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        c.plan === "Business" ? "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-400" :
                        c.plan === "Pro" ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400" :
                        "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {c.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">{c.spend}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{c.joined}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        c.status === "Active"
                          ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
                          : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400">View</button>
                    </td>
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
