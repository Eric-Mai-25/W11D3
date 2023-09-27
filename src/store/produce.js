import produceData from "../mockData/produce.json";

const POPULATE = "POPULATE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export default function produceReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state))

  switch (action.type) {
    case POPULATE:
       action.produce.forEach(produce => {
        nextState[produce.id] = produce
       });
       return nextState
    default:
      return state;
  }
}

