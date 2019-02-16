import types from '../types';

const initialState = {
  funds: 0,
  portfolio: [],
  portfolioError: null,
  portfolioSortBy: {
    name: 'name',
    type: 'text',
    order: 'asc',
  },
  searchResults: [],
  searchError: null,
  searchValue: '',
  showSearchPopup: false,
  showStockPopup: null,
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
        searchError: null,
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
        showStockPopup: null,
      };
    case types.STOCK_PORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolio: action.payload,
      };
    case types.STOCK_PORTFOLIO_ERROR:
      return {
        ...state,
        portfolioError: action.payload,
      };
    case types.MARKET_PORTFOLIO_UPDATE_SUCCESS:
      let showStockPopupPortfolio = state.showStockPopup;
      return {
        ...state,
        portfolio: state.portfolio.map(stock => {
          const update = action.payload.find(updatedStock => {
            if (showStockPopupPortfolio && showStockPopupPortfolio.symbol === updatedStock.symbol) {
              showStockPopupPortfolio = {
                ...showStockPopupPortfolio,
                ...updatedStock,
              }
            }
            return stock.symbol === updatedStock.symbol;
          });
          return {
            ...stock,
            ...update,
          }
        }),
        showStockPopup: showStockPopupPortfolio,
      };
    case types.MARKET_SEARCH_UPDATE_SUCCESS:
      let showStockPopupSearch = state.showStockPopup;
      return {
        ...state,
        searchResults: state.searchResults.map(stock => {
          const update = action.payload.find(updatedStock => {
            if (showStockPopupSearch && showStockPopupSearch.symbol === updatedStock.symbol) {
              showStockPopupSearch = {
                ...showStockPopupSearch,
                ...updatedStock,
              }
            }
            return stock.symbol === updatedStock.symbol;
          });
          return {
            ...stock,
            ...update,
          }
        }),
        showStockPopup: showStockPopupSearch,
      };
    case types.STOCK_BUY_SUCCESS:
    case types.STOCK_SELL_SUCCESS:
      return {
        ...state,
        showStockPopup: null,
        showSearchPopup: false,
        searchValue: '',
      }
    case types.PORTFOLIO_SORT_CHANGE:
      return {
        ...state,
        portfolioSortBy: action.payload,
      }
    default:
      return state;
  };
};

export default reducer;