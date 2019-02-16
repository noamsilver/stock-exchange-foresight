import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

const ResetMarketButton = ({ onClick }) => (
  <div id='reset-market-button'>
    <button
      onClick={onClick}>
      Reset Market
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions.marketResetInit()),
});

export default connect(
  null,
  mapDispatchToProps
)(ResetMarketButton);