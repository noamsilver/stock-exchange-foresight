import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';

const StockModule = ({stock, isToBuy, buy, sell, close}) => {
  const [value, setValue] = useState('');
  let purchaseValue = undefined, currentValue = undefined;
  if (stock && !isToBuy) {
    purchaseValue = stock.purchasePrice * stock.quantity;
    currentValue = stock.currentPrice * stock.quantity;
  }
  console.log({stock, isToBuy})
  return <div
    id='stock-module'
    className={stock ? 'show-stock-module' : 'hide-stock-module'}
    onClick={e => e.stopPropagation()}
  >
    {stock && <div className='stock-inner-module'>
      <X
        width={25}
        height={25}
        onClick={close}
      />
      <h1>{isToBuy ? 'Buy Stock' : 'Sell Stock'}</h1>
      <div>Name: {stock.name}</div>
      <div>Symbol: {stock.symbol}</div>
      {!isToBuy && <div>Purchase Price: {stock.purchasePrice}</div>}
      <div>Current Price: {stock.currentPrice}</div>
      {!isToBuy && <div>Quantity: {stock.quantity}</div>}
      {!isToBuy && <div
        className={'value' + (currentValue < purchaseValue ? ' loss' : ' profit')}
      >
        Value: {currentValue}
      </div>}
      <div>Traded Since: {new Date(stock.startOfCommerce).toLocaleDateString()}</div>
      {isToBuy && <input
        type='number'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Enter quantity'
      ></input>}
      <button
        onClick={isToBuy ? () => {
          console.log('button buy Clicked',{value, integer: Number.isInteger(value), parse: Number.parseInt(value), gt0: Number.parseInt(value) > 0});
          const quantity = Number.parseInt(value);
          if (Number.isInteger(quantity) && quantity > 0) {
            buy(stock.symbol, quantity);
          };
        } : () => {
          console.log('button sell Clicked');
          sell(stock.symbol);
        }}
      >
        {isToBuy ? 'Buy' : 'Sell'}
      </button>
    </div>
    }
  </div>
}

const mapStateToProps = state => ({
  stock: state.showStockPopup,
  isToBuy: state.showStockPopupToBuy,
})

const mapDispatchToProps = dispatch => ({
  buy: (symbol, quantity) => dispatch(actions.stockBuyInit(symbol, quantity)),
  sell: symbol => dispatch(actions.stockSellInit(symbol)),
  close: () => dispatch(actions.stockPopupHide())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockModule);