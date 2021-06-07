import React, {useState} from 'react';

import FakeData from '../FakeData';
import Table1 from './Table1';

const TableHarness = () => {
    const data = FakeData.slice(0,10);
    const [primitiv, setPrimitiv] = useState("original");
 
    return <div className="App">
      
      <Table1 data={data} simpleProp={"primitiv"} />

      <div>       
        <button onClick={() => {
          debugger;
          //OK, Carol is right.  If you update a property of one of the items in your array,
          // the props do NOT get updated.
           data[1].name="feldspar";
           // If you update something else, it seems to make the whole component update though:
           //setPrimitiv("updated") //causes the component to just rerender itself?
         }}>
           feldspar
       </button>
     </div>
   </div>
}

export default TableHarness;
