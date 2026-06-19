import Topbar from "@/components/Topbar";

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <Topbar title="Settings" />
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-2xl space-y-6">
          {/* Profile */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-6 font-semibold text-gray-900 dark:text-white">Profile</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-950">
                <span className="text-xl font-bold text-violet-700 dark:text-violet-400">JD</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
              <button className="ml-auto rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400">
                Change avatar
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["First name", "John"], ["Last name", "Doe"], ["Email", "john@example.com"], ["Company", "Acme Inc."]].map(([label, val]) => (
                <div key={label}>
                  <label className="mb-1.5 block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</label>
                  <input defaultValue={val} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-violet-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
                </div>
              ))}
            </div>
            <button className="mt-4 rounded-full bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">
              Save changes
            </button>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-6 font-semibold text-gray-900 dark:text-white">Notifications</h3>
            <div className="flex flex-col gap-4">
              {[
                { label: "New orders", sub: "Get notified when a new order is placed" },
                { label: "Payment received", sub: "Get notified when a payment is received" },
                { label: "Weekly digest", sub: "Receive a weekly summary of your performance" },
                { label: "Security alerts", sub: "Get notified about security events" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                  <button className={`relative h-6 w-10 rounded-full transition-colors ${i !== 2 ? "bg-violet-600" : "bg-gray-200 dark:bg-gray-700"}`}>
                    <span className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${i !== 2 ? "translate-x-5" : "translate-x-1"}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Danger zone */}
          <div className="rounded-2xl border border-red-200 bg-white p-6 dark:border-red-900 dark:bg-gray-950">
            <h3 className="mb-2 font-semibold text-red-600">Danger Zone</h3>
            <p className="mb-4 text-sm text-gray-500">These actions are irreversible. Please proceed with caution.</p>
            <button className="rounded-full border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950">
              Delete account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
