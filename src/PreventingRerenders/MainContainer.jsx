import React, { useState } from "react";
import DeliveryDriver from "./DeliveryDriver";
import { UnrelatedProps } from "./UnrelatedProps";
import { data } from "./Data";

const MainContainer = ({ children }) => {
  const [datum, setDatum] = useState(data);
  //Even in the component that actually calls useState on the big hunk of data, the UnrelatedProps component still gets rerendered.
  const [myCount, setMyCount] = React.useState(0);
  const localCount = 1;
  return (
    <div>
      <DeliveryDriver data={data} />
      <div>
        This won't update the UI:
        <input
          type="button"
          onClick={(evt) => {
            datum.orders[0].items[0].name = "rigatoni";
          }}
          value="update name of nested data"
        />
      </div>

      <div>
        This WILL update the UI:
        <input
          type="button"
          onClick={(evt) => {
            const newData = { ...datum };
            newData.orders[0].items[0].name = "bucatini";
            setDatum(newData);
          }}
          value="update name of nested data"
        />
      </div>
      <UnrelatedProps count={localCount} topPx={40} />
      <div>
        <h4>
          {` You put it in { children }, and it doesn't rerender when
          MainContainer rererenders`}

          <code
            style={{
              background: "#ccc",
              display: "block",
              margin: "20px 20%",
              padding: "30px",
            }}
          >
            &lt;MainContainer&gt; <br /> &lt;UnrelatedProps count={`foo`} topPx=
            {80} /&gt; <br /> &lt;/MainContainer&gt;
          </code>
        </h4>
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
