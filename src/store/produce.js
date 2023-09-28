import produceData from "../mockData/produce.json";

const POPULATE = "POPULATE";
const LIKE_TOGGLE = 'LIKE_TOGGLE'

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const likeToggle = (produceId) => {
  return {
    type: LIKE_TOGGLE,
    produceId: produceId
  }
}

export default function produceReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state))

  switch (action.type) {
    case POPULATE:
       action.produce.forEach(produce => {
        nextState[produce.id] = produce
       });
       return nextState
    case LIKE_TOGGLE:
       if(nextState[action.produceId].liked){
        nextState[action.produceId].liked = false
       } else{
        nextState[action.produceId].liked = true
       }
       return nextState
    default:
      return state;
  }
}

