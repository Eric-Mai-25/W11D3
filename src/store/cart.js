
const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (itemId) =>{
    return{
        type: ADD_TO_CART,
        itemId: itemId
    }
}


export default function cartReducer(state = {}, action){
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
            if(nextState[action.itemId]){
                nextState[action.itemId].count += 1;
            }else{
                nextState[action.itemId] = {
                    id: action.itemId,
                    count: 1
                }
            }
            return nextState;
        default:
            return state;
    }
}
