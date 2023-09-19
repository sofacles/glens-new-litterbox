import React from "react";

import Order from "./Order";
import { UnrelatedProps } from "./UnrelatedProps";

const DeliveryDriver = ({ data }) => {
  const d = data;
  const [myCount, setMyCount] = React.useState(0);

  let orders = d.orders.map((order) => <Order key={order.id} order={order} />);
  return (
    <div>
      <h1>
        Driver: {data.driver.first} {data.driver.last}{" "}
      </h1>
      {orders}
      <br />

      {/* This thing will be rerendered when data changes. I guess because this component had to update anyway.*/}
      <UnrelatedProps count={myCount} />
    </div>
  );
};

export default DeliveryDriver;
