import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

const cartReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.productData],
      };
    case REMOVE_PRODUCT:
        return {
            ...state,
            products: state.products.filter(item => item.id !== action.payload.productId)
        }
    default:
      return state;
  }
};

export default cartReduser;
