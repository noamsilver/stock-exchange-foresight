import React from 'react';

const AutoCompleteItem = ({ stock, onClick }) => (
  <div
    className='auto-complete-item'
    onClick={(e) => {
      e.stopPropagation();
      onClick(stock);
    }}
  >
    {`${stock.name} (${stock.symbol})`}
  </div>
);

export default AutoCompleteItem;