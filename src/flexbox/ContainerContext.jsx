import React, { createContext, useReducer } from 'react';

const initialState = { display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "stretch", width: "100%" };
function reducer(state, action) {
	switch (action.type) {
		case "UPDATE_ALIGN_ITEMS":
			return { ...state, alignItems: action.cargo };
		case "UPDATE_FLEX_DIRECTION":
			return { ...state, flexDirection: action.cargo };
		case "UPDATE_FLEX_WRAP":
			return { ...state, flexWrap: action.cargo };
		default: return { ...state }
	}
};



export const ContainerContext = createContext(initialState);

export const ContainerContextProvider = ({ children }) => {
	debugger;
	const [containerStyles, dispatch] = useReducer(reducer, initialState);
	return <ContainerContext.Provider value={[containerStyles, dispatch]}>{children}</ContainerContext.Provider>
}
