import { createContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { appData } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = appData;

  const [state, dispatch] = useReducer(DataReducer, Data);

  useEffect(() => {
    dispatch({ type: "InitialDataFetch", payload: Data });
  }, [Data]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
