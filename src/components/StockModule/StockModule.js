import React from 'react';
import { connect } from 'react-redux';

const StockModule = ({stock, isToBuy}) => (
  <div
    id='stock-module'
    className={stock ? 'show-stock-popup' : ''}
  >
    {stock && <div className='stock-inner-module'>
      <h1>{isToBuy ? 'Buy Stock' : 'Sell Stock'}</h1>
      {isToBuy && <div>Name: {stock.name}</div>}
      <div>Symbol: {stock.symbol}</div>
    </div>}
  </div>
)

const mapStateToProps = state => ({
  stock: state.showStockPopup,
  isToBuy: state.isToBuy,
})

export default connect(mapStateToProps)(StockModule);