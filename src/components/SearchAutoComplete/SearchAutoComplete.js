import React from 'react';
import { connect } from 'react-redux';
import AutoCompleteItem from '../AutoCompleteItem'

const SearchAutoComplete = ({ searchResults }) => (
  <div id='search-auto-complete'>
    {searchResults.map((stock, index) => <AutoCompleteItem
      key={index}
      stock={stock} 
    />)}
  </div>
);

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
})

export default connect(mapStateToProps)(SearchAutoComplete);