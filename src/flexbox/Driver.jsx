import React, { useState, useContext } from "react";
import TestPage from './TestPage';

import { ItemFlexContextProvider } from "./ItemFlexContext";
import { ContainerContextProvider } from "./ContainerContext";
import { TestPageLayoutContextProvider } from "./TestPageLayoutContext";

const Driver = () => {



  return (
    <div>
      <TestPageLayoutContextProvider>
        <ContainerContextProvider>
          <ItemFlexContextProvider>
            <TestPage />
          </ItemFlexContextProvider>
        </ContainerContextProvider>
      </TestPageLayoutContextProvider>
    </div>
  );
};

export default Driver;
