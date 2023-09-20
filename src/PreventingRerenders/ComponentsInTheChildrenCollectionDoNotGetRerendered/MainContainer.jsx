import React, { useState } from "react";
import DeliveryDriver from "./DeliveryDriver";
import { UnrelatedProps } from "./UnrelatedProps";
import { data } from "../Data";
import "./style.css";

const MainContainer = ({ children }) => {
  const [datum, setDatum] = useState(data);
  //Even in the component that actually calls useState on the big hunk of data, the UnrelatedProps component still gets rerendered.
  const [myCount, setMyCount] = React.useState(0);
  const localCount = 1;
  return (
    <div className="my-grid">
      <div className="top-center">
        <h4>
          {` You put it in { children }, and it doesn't rerender when MainContainer rererenders`}
        </h4>
        <code
          style={{
            background: "#ccc",
            display: "block",
            margin: "20px 20%",
            padding: "30px",
          }}
        >
          &lt;MainContainer&gt; <br /> &lt;UnrelatedProps count={`foo`} /&gt;
          <br /> &lt;/MainContainer&gt;
        </code>
        {children}
      </div>
      <DeliveryDriver data={data} />
      <div className="top-right">
        This won't update the UI:
        <input
          type="button"
          onClick={(evt) => {
            datum.orders[0].items[0].name = "rigatoni";
          }}
          value="update name of nested data"
        />
      </div>

      <div className="just-below-top-right">
        This WILL update the UI:
        <input
          type="button"
          onClick={(evt) => {
            const newData = { ...datum };
            //OK, I'm doing this demonstrate that since the definition of  <Order /> is wrapped in a memo(...) call, the first order will be rerendered
            // but not the second.
            newData.orders[0] = {
              id: 98,
              customerId: 12,
              items: [
                { id: 89932, name: "Duplex cremes" },
                { id: 82636, name: "Orange Juice" },
                { id: 87235, name: "Pens" },
              ],
            };
            setDatum(newData);
          }}
          value="update name of nested data"
        />
      </div>
      <UnrelatedProps count={localCount} className="count2">
        This gets re-rendered when (unused) setState is called.
      </UnrelatedProps>
    </div>
  );
};

export default MainContainer;
