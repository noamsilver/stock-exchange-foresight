import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

const ResetMarketButton = ({ error, onClick }) => (
  <div id='reset-market-button'>
    <span className='error'>{error}</span>
    <button
      onClick={onClick}>
      Reset Market
    </button>
  </div>
);

const mapStateToProps = state => ({
  error: state.resetMarketError,
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions.marketResetInit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetMarketButton);