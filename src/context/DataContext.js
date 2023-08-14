import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { inventoryData } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = inventoryData;

  const [state, dispatch] = useReducer(DataReducer, initialState);
  const localInventoryData = localStorage.getItem("inventoryDataState");

  useEffect(() => {
    const departments = Data.reduce(
      (acc, curr) =>
        acc.includes(curr.department) ? [...acc] : [...acc, curr.department],
      []
    );
    if (localInventoryData) {
      dispatch({
        type: "FETCH_INITIAL_DATA",
        payload: JSON.parse(localInventoryData),
      });
    } else {
      localStorage.setItem(
        "inventoryDataState",
        JSON.stringify({
          allProducts: Data,
          allDepartments: departments,
          selectedCategory: "all",
        })
      );
      dispatch({
        type: "FETCH_INITIAL_DATA",
        payload: {
          ...initialState,
          allProducts: Data,
          allDepartments: departments,
        },
      });
    }
  }, [Data]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
