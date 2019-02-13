import types from '../types';

export default {
  searchChange: text => ({
    type: types.STOCK_SEARCH_CHANGE,
    payload: text,
  }),

  searchInit: text => ({
    type: types.STOCK_SEARCH_INIT,
    payload: text,
  }),

  searchResults: stocks => ({
    type: types.STOCK_SEARCH_SUCCESS,
    payload: stocks,
  }),

  searchError: error => ({
    type: types.STOCK_SEARCH_ERROR,
    payload: error,
  }),

  searchClearError: () => ({
    type: types.STOCK_SEARCH_CLEAR_ERROR,
  }),

  searchPopupShow: () => ({
    type: types.SEARCH_POPUP_SHOW,
  }),

  searchPopupHide: () => ({
    type: types.SEARCH_POPUP_HIDE,
  }),

  stockPopupShow: stock => ({
    type: types.MARKET_POPUP_SHOW,
    payload: stock,
  }),

  stockPopupHide: () => ({
    type: types.MARKET_POPUP_HIDE,
  }),

  stockPopupError: error => ({
    type: types.MARKET_POPUP_ERROR,
    payload: error,
  }),

  stockPopupClearError: () => ({
    type: types.MARKET_POPUP_CLEAR_ERROR,
  }),
}
