import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import AutoCompleteItem from '../AutoCompleteItem'

const SearchAutoComplete = ({ searchResults, show, onClick }) => (
  <div id='search-auto-complete'>
    {show ? searchResults.map((stock, index) => <AutoCompleteItem
      key={index}
      stock={stock}
      onClick={onClick}
    />) : ''}
  </div>
);

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  show: state.showSearchPopup,
})

const mapDispatchToProps = dispatch => ({
  onClick: stock => dispatch(actions.stockPopupShow(stock)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAutoComplete);