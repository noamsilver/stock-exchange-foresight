import React from 'react';
import { connect } from 'react-redux';
import AutoCompleteItem from '../AutoCompleteItem'

const SearchAutoComplete = ({ searchResults, show }) => (
  <div id='search-auto-complete'>
    {show ? searchResults.map((stock, index) => <AutoCompleteItem
      key={index}
      stock={stock} 
    />) : ''}
  </div>
);

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
  show: state.showSearchPopup,
})

export default connect(mapStateToProps)(SearchAutoComplete);