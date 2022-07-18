const menuReduce = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case 'INCREMENT_QTY':
      const filterIncrementIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      state.cart[filterIncrementIndex].qty =
        state.cart[filterIncrementIndex].qty <
        state.cart[filterIncrementIndex].inStock
          ? state.cart[filterIncrementIndex].qty + 1
          : state.cart[filterIncrementIndex].qty;

      return {
        ...state,
        cart: state.cart,
      };

    case 'DECREMENT_QTY':
      const filterDecrementIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      state.cart[filterDecrementIndex].qty =
        state.cart[filterDecrementIndex].qty <=
          state.cart[filterDecrementIndex].inStock &&
        state.cart[filterDecrementIndex].qty > 1
          ? state.cart[filterDecrementIndex].qty - 1
          : state.cart[filterDecrementIndex].qty;

      return {
        ...state,
        cart: state.cart,
      };

    default:
      return state;
  }
};

export default menuReduce;
