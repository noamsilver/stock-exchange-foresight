import React from 'react';
import StockModule from '../../components/StockModule';
import TopBar from '../TopBar';
import StockPortfolio from '../StockPortfolio';

const Market = () => (
  <div id='market'>
    <StockModule />
    <TopBar />
    <StockPortfolio />
  </div>
);

export default Market;