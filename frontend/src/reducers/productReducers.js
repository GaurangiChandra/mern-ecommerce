// reducer takes 2 things -> initial state and action
// when we create an action we are dispatching it to the reducer

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCT_LIST_SUCCESS":
      // loading is false here because during the "request" case the loading is already completed.
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// to use this reducer we need to add it to our store.js
