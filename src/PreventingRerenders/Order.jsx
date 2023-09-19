import React from "react";

const Order = ({ order }) => {
  const items = order.items.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <div className="order-detail">
      <span>Order: {order.id}</span>
      <span>Customer: {order.customerId}</span>
      <ul>{items}</ul>
    </div>
  );
};

export default Order;
