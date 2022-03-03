import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
export const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//Global Context
export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payLoad: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payLoad: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
