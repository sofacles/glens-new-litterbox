import React, { useContext } from 'react';
import TheList from "./TheList.jsx";
import { ContainerControlPanel } from "./ContainerControlPanel";
import { ItemControlPanel } from "./ItemControlPanel.jsx";
import { TestPageLayoutContext, TestPageLayoutContextProvider } from "./TestPageLayoutContext";


const TestPage = () => {


    const [initialTestPageStyle, dispatch] = useContext(TestPageLayoutContext);

    return (<div style={initialTestPageStyle}>
        <ContainerControlPanel />
        <TheList />
        <ItemControlPanel />
    </div>);
}

export default TestPage;