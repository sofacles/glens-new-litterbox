import React, { createContext, useReducer } from 'react';

const initialState = { backgroundColor: "#4AA", display: "flex", flexDirection: "row", flexWrap: "nowrap", height: "200px", alignItems: "stretch", width: "100%" };


function reducer(state, action) {
	switch (action.type) {
		case "UPDATE_ALIGN_ITEMS":
			return { ...state, alignItems: action.cargo };
		case "UPDATE_FLEX_DIRECTION":
			const extras = action.cargo === "row" ? { height: "200px", width: "100%" } : { height: "800px", width: "400px" };
			return { ...state, flexDirection: action.cargo, ...extras };
		case "UPDATE_FLEX_WRAP":
			return { ...state, flexWrap: action.cargo };
		default: return { ...state }
	}
};

export const ContainerContext = createContext(initialState);

export const ContainerContextProvider = ({ children }) => {
	const [containerStyles, dispatch] = useReducer(reducer, initialState);
	return <ContainerContext.Provider value={[containerStyles, dispatch]}>{children}</ContainerContext.Provider>
}
