# Practical 12: Nested Routing

**Aim**: Develop an E-commerce Order Management application where the Orders page contains nested routes such as Current Orders, Order History, and Cancelled Orders.

## Key Features
- **Nested Route Architecture**: Uses React Router DOM v6 nested `<Route>` definitions.
- **`<Outlet />` Usage**: Parent `OrdersLayout` provides sub-tab navigation and renders nested content dynamically into `<Outlet />`.
- **Sub-pages**:
  - `/orders/current`: Active tracking orders.
  - `/orders/history`: Delivered order records.
  - `/orders/cancelled`: Cancelled items and refund tracking.

## How to Run
```bash
npm install
npm run dev
```
