import types from '../types';

export default {
  //Update funds
  updateFunds: funds => ({
    type: types.FUNDS_UPDATE,
    payload: funds,
  }),

  //Search
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

  //Search popup
  searchPopupShow: () => ({
    type: types.SEARCH_POPUP_SHOW,
  }),

  searchPopupHide: () => ({
    type: types.SEARCH_POPUP_HIDE,
  }),

  stockPopupShow: stock => ({
    type: types.STOCK_POPUP_SHOW,
    payload: stock,
  }),

  stockPopupHide: () => ({
    type: types.STOCK_POPUP_HIDE,
  }),

  stockPopupError: error => ({
    type: types.STOCK_POPUP_ERROR,
    payload: error,
  }),

  stockPopupClearError: () => ({
    type: types.STOCK_POPUP_CLEAR_ERROR,
  }),

  //Stock buy
  stockBuyInit: (symbol, quantity) => ({
    type: types.STOCK_BUY_INIT,
    payload: {
      symbol,
      quantity,
    },
  }),

  stockBuySuccess: () => ({
    type: types.STOCK_BUY_SUCCESS,
  }),

  stockBuyError: error => ({
    type: types.STOCK_BUY_ERROR,
    payload: error,
  }),

  stockBuyClearError: () => ({
    type: types.STOCK_BUY_CLEAR_ERROR,
  }),

  //Stock sell
  stockSellInit: symbol => ({
    type: types.STOCK_SELL_INIT,
    payload: symbol,
  }),

  stockSellSuccess: funds => ({
    type: types.STOCK_SELL_SUCCESS,
    payload: funds,
  }),

  stockSellError: error => ({
    type: types.STOCK_SELL_ERROR,
    payload: error,
  }),

  stockSellClearError: () => ({
    type: types.STOCK_SELL_CLEAR_ERROR,
  }),

  //Portfolio
  portfolioInit: symbol => ({
    type: types.STOCK_PORTFOLIO_INIT,
    payload: symbol,
  }),

  portfolioSuccess: portfolio => ({
    type: types.STOCK_PORTFOLIO_SUCCESS,
    payload: portfolio,
  }),

  portfolioError: error => ({
    type: types.STOCK_PORTFOLIO_ERROR,
    payload: error,
  }),

  portfolioClearError: () => ({
    type: types.STOCK_PORTFOLIO_CLEAR_ERROR,
  }),

  //Market update
  marketUpdateInit: () => ({
    type: types.MARKET_UPDATE_INIT,
  }),

  marketUpdateSuccess: stocks => ({
    type: types.MARKET_UPDATE_SUCCESS,
    payload: stocks,
  }),
  
  marketPortfolioUpdateSuccess: stocks => ({
    type: types.MARKET_PORTFOLIO_UPDATE_SUCCESS,
    payload: stocks,
  }),

  marketSearchUpdateSuccess: stocks => ({
    type: types.MARKET_SEARCH_UPDATE_SUCCESS,
    payload: stocks,
  }),

  marketUpdateError: error => ({
    type: types.MARKET_UPDATE_ERROR,
    payload: error,
  }),

  marketUpdateClearError: () => ({
    type: types.MARKET_UPDATE_CLEAR_ERROR,
  }),

  //Market reset
  marketResetInit: () => ({
    type: types.MARKET_RESET_INIT,
  }),

  marketResetSuccess: () => ({
    type: types.MARKET_RESET_SUCCESS,
  }),

  marketResetError: error => ({
    type: types.MARKET_RESET_ERROR,
    payload: error,
  }),

  marketResetClearError: () => ({
    type: types.MARKET_RESET_CLEAR_ERROR,
  }),

  //Portfolio sort change
  portfolioSortChange: sortData => ({
    type: types.PORTFOLIO_SORT_CHANGE,
    payload: sortData,
  })
}
