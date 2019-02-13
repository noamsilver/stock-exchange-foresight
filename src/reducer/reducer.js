import types from '../types';

const initialState = {
  funds: 0,
  portfolio: [],
  portfolioError: undefined,
  searchResults: [],
  searchError: undefined,
  searchValue: '',

}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FUNDS_UPDATE:
      return {
        ...state,
        funds: action.payload,
      }
    case types.STOCK_SEARCH_CHANGE:
      return {
        ...state,
        searchValue: action.payload,
      }
    case types.STOCK_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case types.STOCK_SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload,
      };
    case types.STOCK_SEARCH_CLEAR_ERROR:
      return {
        ...state,
        searchError: undefined,
      };
    default:
      return state;
  };
};

export default reducer;