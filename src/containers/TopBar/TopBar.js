import React from 'react';
import Funds from '../../components/Funds';
import SearchBox from '../../components/SearchBox';
import ResetMarketButton from '../../components/ResetMarketButton';

const TopBar = () => (
  <div id='top-bar'>
    <Funds />
    <SearchBox />
    <ResetMarketButton />
  </div>
);

export default TopBar;