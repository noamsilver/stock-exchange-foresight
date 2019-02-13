import types from '../types';

const initialState = {
  funds: 0,
  portfolio: [],
  portfolioError: undefined,
  searchResults: [],
  searchError: undefined,
  searchValue: '',
  showSearchPopup: false,
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
    case types.SEARCH_POPUP_SHOW:
      return {
        ...state,
        showSearchPopup: true,
      };
    case types.SEARCH_POPUP_HIDE:
      return {
        ...state,
        showSearchPopup: false,
      };
    default:
      return state;
  };
};

export default reducer;