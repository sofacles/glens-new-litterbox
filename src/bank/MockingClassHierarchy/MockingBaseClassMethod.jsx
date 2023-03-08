import React from "react";
import Data from "../DataService/Data";
import Junco from "../DataService/Junco";
import Shrew from "../DataService/Shrew";

const AnimalRace = () => {
  const shrew = new Shrew();
  debugger;
  const shrewPositionAtT3 = shrew.reportPositionAtT(3);

  const junco = new Junco();
  const juncoPositionAtT3 = junco.reportPositionAtT(3);
  return (
    <>
      <h1 data-testid="h1-1">Shrew inherits from Organism</h1>
      <h2>At T = 3</h2>
      <div>The shrew is at {shrewPositionAtT3}</div>
      <div>The junco is at {juncoPositionAtT3}</div>
    </>
  );
};

export { AnimalRace };
