import React from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

const AutoCompleteItem = ({stock, onClick}) => (
  <div
    className='auto-complete-item'
    onClick={() => onClick(stock)}
  >
    {`${stock.name} (${stock.symbol})`}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onClick: (stock) => dispatch(actions.stockPopupShow(stock)),  
})

export default connect(undefined, mapDispatchToProps)(AutoCompleteItem);