import React from 'react';
import { connect } from 'react-redux';
import PortfolioTableRow from '../../components/PortfolioTableRow'

const StockPortfolio = ({ portfolio }) => {
  console.log({portfolio})
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
          />)}
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = state => ({
  portfolio: state.portfolio,
})

export default connect(mapStateToProps)(StockPortfolio);