import createContext from "./createContext";

const teamReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createContext(teamReducer, {}, []);
