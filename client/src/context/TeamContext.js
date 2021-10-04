import createMainContext from "./createMainContext";

const teamReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createMainContext(teamReducer, {}, []);
