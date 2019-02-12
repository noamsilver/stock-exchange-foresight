import types from '../types';

const initialState = {
  myPortfolio: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.STOCK_BUY_SUCCESS:
      return {
        ...state,
        myPortfolio: [
          ...state.myPortfolio,
          action.payload,
        ],
      };
    default:
      return state;
  };
};

export default reducer;