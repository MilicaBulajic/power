
import React, { createContext, useReducer, useContext } from "react";


const initialState = {}

const StoreContext = createContext(initialState);

export const UserStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};