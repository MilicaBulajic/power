import createMainContext from "./createMainContext"

const projectReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createMainContext(projectReducer, {}, {});