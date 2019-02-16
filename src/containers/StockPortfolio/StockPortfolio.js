import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import PortfolioTableRow from '../../components/PortfolioTableRow'

const StockPortfolio = ({ portfolio, onClick }) => {
  return (
    <div id='stock-portfolio'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Purchase Price</th>
            <th>Current Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Traded Since</th>
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
    </div>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio,
});

const mapDispatchToProps = dispatch => ({
  onClick: (stock) => {
    dispatch(actions.searchChange(''));
    dispatch(actions.searchPopupHide());
    dispatch(actions.stockPopupShow(stock));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPortfolio);