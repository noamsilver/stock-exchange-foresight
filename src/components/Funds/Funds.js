import React from 'react';
import { connect } from 'react-redux';

const Funds = ({ funds }) => (
  <span id='funds'>
    Funds: {funds}$
  </span>
);

const mapStateToProps = (state) => ({
  funds: state.funds,
});

export default connect(
  mapStateToProps
)(Funds);