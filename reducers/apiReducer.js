export const myReducer = (prevState, action) => {
  switch (action.type) {
    case "SEARCH_ITEM":
      return {
        ...prevState,
        isLoading: true,
      };
    case "FOUND_ITEM":
      return {
        ...prevState,
        isLoading: false,
        results: action.payload,
      };
    case "ERROR":
      return {
        ...prevState,
        isError: true,
        isLoading: false,
      };
    case "OK":
      return {
        ...prevState,
        isError: false,
      };
    default:
      break;
  }
};

export const initialState = {
  results: [],
  isLoading: false,
  isError: false,
};

export const searchHandler = (dispatcher) => {
  dispatcher({ type: "SEARCH_ITEM" });
};

export const foundHandler = (dispatcher, items) => {
  dispatcher({ type: "FOUND_ITEM", payload: items });
};

export const errorHandler = (dispatcher) => {
  dispatcher({ type: "ERROR" });
};

export const okHandler = (dispatcher) => {
  dispatcher({ type: "OK" });
};
