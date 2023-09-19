import React from "react";

const Order = ({ order }) => {
  const items = order.items.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <div>
      <h2>Order: {order.id}</h2>
      <h3>Customer: {order.customerId}</h3>
      <ul>{items}</ul>
    </div>
  );
};

export default Order;
