import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import SearchAutoComplete from '../SearchAutoComplete';

const SearchBox = ({ onChange, value }) => {
  return (
    <div id='search-box'>
      <input
        className='search-input'
        name={'search' + new Date().valueOf()} //gives the input field a different name each time thus disabling the built in autocomplete popup.
        type='text'
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder='Enter stock search'
      />
      <SearchAutoComplete />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.searchValue,
})

const mapDispatchToProps = dispatch => ({
  onChange: (text) => {
    dispatch(actions.searchChange(text));
    dispatch(actions.searchInit(text));
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);