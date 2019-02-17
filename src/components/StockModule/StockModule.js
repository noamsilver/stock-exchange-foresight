import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';

const StockModule = ({stock, isToBuy, funds, error, buy, sell, close, showError, clearError}) => {
  const [value, setValue] = useState('');
  let purchaseValue = undefined, currentValue = undefined;
  if (stock && !isToBuy) {
    purchaseValue = stock.purchasePrice * stock.quantity;
    currentValue = stock.currentPrice * stock.quantity;
  }
  return <div
    id='stock-module'
    className={stock ? 'show-stock-module' : 'hide-stock-module'}
    onClick={e => e.stopPropagation()}
  >
    {stock && <div className='stock-inner-module'>
      <X
        width={25}
        height={25}
        onClick={() => {
          clearError();
          close();
        }}
      />
      <h1>{isToBuy ? 'Buy Stock' : 'Sell Stock'}</h1>
      <div>Name: {stock.name}</div>
      <div>Symbol: {stock.symbol}</div>
      {!isToBuy && <div>Purchase Price: {stock.purchasePrice}</div>}
      <div>Current Price: {stock.currentPrice}</div>
      {!isToBuy && <div>Quantity: {stock.quantity}</div>}
      {!isToBuy && <div
        className={'value' + (
          currentValue ?
            (currentValue < purchaseValue ?
              ' loss' :
              currentValue === purchaseValue ?
                '' :
                ' profit'
            ) :
            ''
        )}
      >
        Value: {currentValue ? currentValue : 'Loadeing...'}
      </div>}
      <div>Traded Since: {new Date(stock.startOfCommerce).toLocaleDateString()}</div>
      {isToBuy && <input
        type='number'
        value={value}
        onChange={e => {
          clearError();
          setValue(e.target.value);
        }}
        placeholder='Enter quantity'
      ></input>}
      <button
        onClick={isToBuy ? () => {
          const quantity = Number.parseInt(value);
          if (Number.isInteger(quantity) && quantity > 0) {
            if ((quantity * stock.currentPrice) <= funds) {
              buy(stock.symbol, quantity);
            } else {
              showError('Your account has insufficient funds to complete the current transaction')
            }
          };
        } : () => {
          sell(stock.symbol);
        }}
      >
        {isToBuy ? 'Buy' : 'Sell'}
      </button>
      <div className='error'>{error}</div>
    </div>
    }
  </div>
}

const mapStateToProps = state => ({
  stock: state.showStockPopup,
  isToBuy: state.showStockPopupToBuy,
  funds: state.funds,
  error: state.stockPopupError,
})

const mapDispatchToProps = dispatch => ({
  buy: (symbol, quantity) => dispatch(actions.stockBuyInit(symbol, quantity)),
  sell: symbol => dispatch(actions.stockSellInit(symbol)),
  close: () => dispatch(actions.stockPopupHide()),
  showError: error => dispatch(actions.stockPopupError(error)),
  clearError: error => dispatch(actions.stockPopupClearError()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockModule);