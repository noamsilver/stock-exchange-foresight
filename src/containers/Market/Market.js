import React from 'react';
import { connect } from 'react-redux';
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

export default connect()(Market);