const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const MINUS_FROM_CART = "MINUS_FROM_CART";
const EMPTY_CART = "EMPTY_CART"

export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    itemId: itemId,
  };
};

export const emptyCart = ()=>{
    return {
        type: EMPTY_CART,
    }
}

export const minusFromCart = (itemId) => {
  return {
    type: MINUS_FROM_CART,
    itemId: itemId,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    itemId: itemId,
  };
};

export default function cartReducer(state = {}, action) {
  const nextState = Object.assign({}, Object.freeze(state));
  // let cartObject = {
  //     cart: {
  //       //id{
  //         //
  //       //}
  //     },
  //     produce: {
  //         // action.item
  //     }
  //   }

  switch (action.type) {
    case ADD_TO_CART:
      if (nextState[action.itemId]) {
        nextState[action.itemId].count++;
      } else {
        nextState[action.itemId] = {
          id: action.itemId,
          count: 1,
        };
      }
      return nextState;
    case MINUS_FROM_CART:
      if (nextState[action.itemId].count === 1) {
        delete nextState[action.itemId];
      } else {
        nextState[action.itemId].count--;
      }
      return nextState;
    case REMOVE_FROM_CART:
      delete nextState[action.itemId];
      return nextState;
    case EMPTY_CART:
        return {}
    default:
      return state;
  }
}
