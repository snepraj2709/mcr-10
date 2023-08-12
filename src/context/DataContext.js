import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { inventoryData } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = inventoryData;
  const inventoryDataLocal = JSON.parse(localStorage.getItem("inventoryState"));

  const [state, dispatch] = useReducer(
    DataReducer,
    inventoryDataLocal.allProducts
  );
  console.log("state", state);

  useEffect(() => {
    localStorage.setItem(
      "inventoryState",
      JSON.stringify({
        allProducts: Data,
      })
    );
  }, [Data]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
