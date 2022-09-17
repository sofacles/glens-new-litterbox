import React, { createContext, useReducer } from 'react';


//When the list of flexed items horizontal, just keep the layout like I have it (though maybe I should abandon the "Container control panel up top and item
// control panel below" thing anyway).  If it's vertical, the control panels become blades!  Or maybe just lists on either side of the list.
const testPageStyleNormal = {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginRight: "15px",
};

const testPageStyleTall = {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
};

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_FLEX_DIR": //does this clash with ContainerContext?  That's why I'm using this string.
            //flex direction that we've put the list into - so if the list is running down the column direction, the test page should show the two control panels 
            // and the list in a ROW configuration 
            return action.cargo === "column" ? testPageStyleTall : testPageStyleNormal;
    }
}





export const TestPageLayoutContext = createContext(testPageStyleNormal);

export const TestPageLayoutContextProvider = ({ children }) => {
    const [initialTestPageStyle, dispatch] = useReducer(reducer, testPageStyleNormal);
    return <TestPageLayoutContext.Provider value={[initialTestPageStyle, dispatch]} > {children}</ TestPageLayoutContext.Provider>
}