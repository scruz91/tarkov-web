import { React, createContext, useContext } from "react";
import { useReducer } from "react";
import { myReducer, initialState } from "../reducers/apiReducer.js";

const Context = createContext();

export function NotificationProvider({ children }) {
  const [state, dispatcher] = useReducer(myReducer, initialState);
  return (
    <Context.Provider value={[state, dispatcher]}>{children}</Context.Provider>
  );
}

export function useNotificationContext() {
  return useContext(Context);
}
