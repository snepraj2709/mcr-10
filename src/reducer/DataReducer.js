export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "AddProduct": {
      if (payload) {
        return {
          ...state,
          allProducts: [...state.allProducts, payload],
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
