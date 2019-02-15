import React from 'react';

const PortfolioTableRow = ({name, symbol, purchasePrice, currentPrice, quantity, tradedSince, onClick}) => {
  const purchaseValue = purchasePrice * quantity;
  const currentValue = currentPrice * quantity;
  console.log({purchasePrice, purchaseValue, currentPrice, currentValue})
  return (
    <tr
    onClick={onClick}>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{purchasePrice}</td>
      <td>{currentPrice}</td>
      <td>{quantity}</td>
      <td className={'value' + (currentValue < purchaseValue ? ' loss' : ' profit')}>{currentValue}</td>
      <td>{tradedSince}</td>
    </tr>
  );
};

export default PortfolioTableRow;