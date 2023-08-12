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

    default:
      return state;
  }
};
