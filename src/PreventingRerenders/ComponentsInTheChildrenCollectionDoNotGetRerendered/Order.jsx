import React, { memo } from "react";

const Order = memo(({ order }) => {
  console.log(`rendering Order ${order.id}`);
  const items = order.items.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <div className="order-detail">
      <span>Order: {order.id}</span>
      <span>Customer: {order.customerId}</span>
      <ul>{items}</ul>
    </div>
  );
});

export default Order;
