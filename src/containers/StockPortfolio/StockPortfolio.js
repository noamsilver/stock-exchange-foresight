import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import PortfolioTableRow from '../../components/PortfolioTableRow';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';

const StockPortfolio = ({ portfolio, sortBy, error, onClick, changeSort, clearError }) => {
  if (portfolio && portfolio[0] && portfolio[0].name) {
    portfolio.sort((a, b) => {
      switch (sortBy.type) {
        case 'text':
          return a[sortBy.name].localeCompare(b[sortBy.name], undefined, { sensitivity: 'base' });
        case 'number':
          return a[sortBy.name] > b[sortBy.name];
        case 'value':
          return (a.currentPrice * a.quantity) > (b.currentPrice * b.quantity);
        case 'date':
          return new Date(a[sortBy.name]).valueOf() > new Date(b[sortBy.name]).valueOf();
        default:
          return true;
      };
    });
    if (sortBy.order === 'desc') {
      portfolio.reverse();
    }
  }
  return (
    <div id='stock-portfolio'>
      <h1>My Portfolio</h1>
      <div className='error'>
        {error}
        {error.length > 0 && <X
          width={10}
          height={10}
          onClick={clearError}
        />}
      </div>
      <table>
        <thead>
          <tr>
            <th
              className={sortBy.name === 'name' ? 'sort-by' : ''}
              onClick={() => changeSort({
                name: 'name',
                type: 'text',
                order: sortBy.name === 'name' ? (sortBy.order === 'asc' ? 'desc' : 'asc') : 'asc',
              })}
            >Name</th>
            <th
              className={sortBy.name === 'symbol' ? 'sort-by' : ''}
              onClick={() => changeSort({
                name: 'symbol',
                type: 'text',
                order: sortBy.name === 'symbol' ? (sortBy.order === 'asc' ? 'desc' : 'asc') : 'asc',
              })}
            >Symbol</th>
            <th
              className={sortBy.name === 'purchasePrice' ? 'sort-by' : ''}
              onClick={() => changeSort({
                name: 'purchasePrice',
                type: 'number',
                order: sortBy.name === 'purchasePrice' ? (sortBy.order === 'asc' ? 'desc' : 'asc') : 'asc',
              })}
            >Purchase Price</th>
            <th
              className={sortBy.name === 'currentPrice' ? 'sort-by' : ''}
              onClick={() => changeSort({
                name: 'currentPrice',
                type: 'number',
                order: sortBy.name === 'currentPrice' ? (sortBy.order === 'asc' ? 'desc' : 'asc') : 'asc',
              })}
            >Current Price</th>
            <th
              className={sortBy.name === 'quantity' ? 'sort-by' : ''}
              onClick={() => changeSort({
                name: 'quantity',
                type: 'number',
                order: sortBy.name === 'quantity' ? (sortBy.order === 'asc' ? 'desc' : 'asc') : 'asc',
              })}
            >Quantity</th>
            <th
              className={sortBy.name === 'value' ? 'sort-by' : ''}
              onClick={() => changeSort({
                name: 'value',
                type: 'value',
                order: sortBy.name === 'value' ? (sortBy.order === 'asc' ? 'desc' : 'asc') : 'asc',
              })}
            >Value</th>
            <th
              className={sortBy.name === 'startOfCommerce' ? 'sort-by' : ''}
              onClick={() => changeSort({
                name: 'startOfCommerce',
                type: 'date',
                order: sortBy.name === 'startOfCommerce' ? (sortBy.order === 'asc' ? 'desc' : 'asc') : 'asc',
              })}
            >Traded Since</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((stock, index) => <PortfolioTableRow
            key={index}
            name={stock.name}
            symbol={stock.symbol}
            purchasePrice={stock.purchasePrice}
            currentPrice={stock.currentPrice}
            quantity={stock.quantity}
            tradedSince={new Date(stock.startOfCommerce).toLocaleDateString()}
            onClick={() => onClick(stock)}
          />)}
        </tbody>
      </table>
      {portfolio.length === 0 ? <span>There are no stocks currently in your portfolio.</span> : ''}
    </div>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio,
  sortBy: state.portfolioSortBy,
  error: state.portfolioError,
});

const mapDispatchToProps = dispatch => ({
  onClick: stock => {
    dispatch(actions.searchChange(''));
    dispatch(actions.searchPopupHide());
    dispatch(actions.stockPopupShow(stock));
  },
  changeSort: sortData => dispatch(actions.portfolioSortChange(sortData)),
  clearError: () => dispatch(actions.portfolioClearError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPortfolio);