import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, Navigate } from "react-router-dom";

// 1. Nested Route: Current Orders
function CurrentOrders() {
  const currentOrders = [
    { id: "ORD-2026-901", item: "Sony WH-1000XM5 Noise-Cancelling Headphones", qty: 1, total: 24999, status: "Out for Delivery", eta: "Today by 6:00 PM", badge: "bg-amber-100 text-amber-800" },
    { id: "ORD-2026-902", item: "Keychron K2 Wireless Mechanical Keyboard", qty: 2, total: 15998, status: "Processing in Warehouse", eta: "Tomorrow", badge: "bg-blue-100 text-blue-800" },
    { id: "ORD-2026-903", item: "Logitech MX Master 3S Ergonomic Mouse", qty: 1, total: 8495, status: "Shipped", eta: "20 Oct 2026", badge: "bg-indigo-100 text-indigo-800" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">📦 Active Current Orders ({currentOrders.length})</h3>
        <span className="text-xs bg-green-100 text-green-800 font-semibold px-2.5 py-1 rounded-full">Live Tracking</span>
      </div>
      <div className="space-y-3">
        {currentOrders.map(order => (
          <div key={order.id} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-300 transition">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-sm font-bold text-gray-700">{order.id}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${order.badge}`}>{order.status}</span>
            </div>
            <p className="font-semibold text-gray-900">{order.item}</p>
            <div className="mt-2 flex flex-wrap items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-2">
              <span>Quantity: <strong>{order.qty}</strong> • Total: <strong className="text-gray-900">₹{order.total.toLocaleString()}</strong></span>
              <span className="text-blue-600 font-medium">ETA: {order.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Nested Route: Order History
function OrderHistory() {
  const historyOrders = [
    { id: "ORD-2026-780", item: "Dell UltraSharp 27-inch 4K Monitor", date: "12 Oct 2026", total: 42999, status: "Delivered", invoice: "INV-780.pdf" },
    { id: "ORD-2026-654", item: "Anker USB-C 100W Fast Charger & Cable", date: "28 Sep 2026", total: 3499, status: "Delivered", invoice: "INV-654.pdf" },
    { id: "ORD-2026-521", item: "SanDisk 1TB Portable External SSD", date: "15 Sep 2026", total: 8999, status: "Delivered", invoice: "INV-521.pdf" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">✅ Past Order History ({historyOrders.length})</h3>
        <span className="text-xs bg-gray-100 text-gray-700 font-semibold px-2.5 py-1 rounded-full">Delivered Orders</span>
      </div>
      <div className="space-y-3">
        {historyOrders.map(order => (
          <div key={order.id} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-sm font-bold text-gray-700">{order.id}</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                ✓ {order.status} on {order.date}
              </span>
            </div>
            <p className="font-semibold text-gray-900">{order.item}</p>
            <div className="mt-2 flex flex-wrap items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-2">
              <span>Total Paid: <strong className="text-gray-900">₹{order.total.toLocaleString()}</strong></span>
              <button onClick={() => alert(`Downloading invoice: ${order.invoice}`)} className="text-blue-600 hover:underline font-medium text-xs">
                📄 Download Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Nested Route: Cancelled Orders
function CancelledOrders() {
  const cancelledOrders = [
    { id: "ORD-2026-410", item: "Apple iPad Air 11-inch (M2 Chip)", reason: "Cancelled by Customer", refund: "Refund Processed (₹59,900)", date: "05 Aug 2026" },
    { id: "ORD-2026-302", item: "Logitech C922 Pro Streaming Webcam", reason: "Address unreachable", refund: "Refund Credited (₹9,450)", date: "19 Jul 2026" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">❌ Cancelled Orders ({cancelledOrders.length})</h3>
        <span className="text-xs bg-red-100 text-red-800 font-semibold px-2.5 py-1 rounded-full">Cancelled & Refunded</span>
      </div>
      <div className="space-y-3">
        {cancelledOrders.map(order => (
          <div key={order.id} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-sm font-bold text-gray-700">{order.id}</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-700">{order.reason}</span>
            </div>
            <p className="font-semibold text-gray-900">{order.item}</p>
            <div className="mt-2 flex flex-wrap items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-2">
              <span className="text-emerald-600 font-medium">{order.refund}</span>
              <span className="text-xs text-gray-400">Date: {order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Orders Parent Layout with <Outlet />
function OrdersLayout() {
  const getSubTabClass = ({ isActive }) =>
    `px-4 py-2 font-semibold text-sm rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
    }`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">E-Commerce Order Management</h2>
        <p className="text-sm text-gray-500">
          The parent <code>/orders</code> route renders sub-routes dynamically using React Router's <code>&lt;Outlet /&gt;</code>.
        </p>

        {/* Nested Routing Sub-Navigation */}
        <div className="flex flex-wrap gap-2 mt-4 bg-gray-50 p-1.5 rounded-xl border border-gray-200 max-w-fit">
          <NavLink to="/orders/current" className={getSubTabClass}>
            📦 Current Orders
          </NavLink>
          <NavLink to="/orders/history" className={getSubTabClass}>
            ✅ Order History
          </NavLink>
          <NavLink to="/orders/cancelled" className={getSubTabClass}>
            ❌ Cancelled Orders
          </NavLink>
        </div>
      </div>

      {/* Nested Route components render here */}
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-6 max-w-4xl mx-auto">
        <header className="mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Unit 4 - Practical 2 (Practical 12)
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
            Nested Routing in React Router
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            E-commerce Order Management containing nested routes: Current Orders, Order History, and Cancelled Orders.
          </p>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/orders/current" replace />} />
          <Route path="/orders" element={<OrdersLayout />}>
            <Route index element={<Navigate to="current" replace />} />
            <Route path="current" element={<CurrentOrders />} />
            <Route path="history" element={<OrderHistory />} />
            <Route path="cancelled" element={<CancelledOrders />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
