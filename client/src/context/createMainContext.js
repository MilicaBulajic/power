import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispach] = useReducer(reducer, initialState);
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispach);
        }
        return (
            <Context.Provider value={{ state: state, ...boundActions }}>
              {children}
            </Context.Provider>
          );
        };
        return { Context, Provider };
      };
      