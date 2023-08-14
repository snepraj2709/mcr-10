export const initialState = {
  allProducts: [],
  allDepartments: [],
  selectedCategory: "all",
  showLowStock: false,
  sortBy: "all",
};

export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_INITIAL_DATA": {
      return { ...payload };
    }
    case "AddProduct": {
      if (payload) {
        return {
          ...state,
          allProducts: [...payload],
        };
      }
      break;
    }
    case "SelectCategory":
      return { ...state, selectedCategory: payload };
    case "SetLowStocks":
      return { ...state, showLowStock: payload };
    case "SortBy":
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};
