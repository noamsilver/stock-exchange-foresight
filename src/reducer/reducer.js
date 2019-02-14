import types from '../types';

const initialState = {
  funds: 0,
  portfolio: [],
  portfolioError: undefined,
  searchResults: [],
  searchError: undefined,
  searchValue: '',
  showSearchPopup: false,
  showStockPopup: undefined,
  showStockPopupToBuy: false,
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
        searchResults: action.payload.filter(stock => (state.portfolio.find(myStock => myStock.symbol === stock.symbol) ? false : true)),
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
    case types.STOCK_POPUP_SHOW:
      const isToBuy = state.portfolio.find(myStock => myStock.symbol === action.payload.symbol) ? false: true;
      return {
        ...state,
        showStockPopup: action.payload,
        showStockPopupToBuy: isToBuy,
      };
    case types.STOCK_POPUP_HIDE:
      return {
        ...state,
        showStockPopup: undefined,
      };
    default:
      return state;
  };
};

export default reducer;