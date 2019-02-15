import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import SearchAutoComplete from '../SearchAutoComplete';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';

const SearchBox = ({ value, onChange, hide }) => {
  return (
    <div id='search-box'>
      <input
        className='search-input'
        name={'search' + new Date().valueOf()} //gives the input field a different name each time thus disabling the built in autocomplete popup.
        type='text'
        onChange={e => {
          if (e.target.value === '') {
           hide();
          }
          onChange(e.target.value);
        }}
        value={value}
        placeholder='Enter stock search'
      />
      <X
        width={15}
        height={15}
        onClick={() => {
          hide();
          onChange('');
        }}
      />
      <SearchAutoComplete />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.searchValue,
})

const mapDispatchToProps = dispatch => ({
  onChange: text => {
    dispatch(actions.searchChange(text));
    dispatch(actions.searchInit(text));
  },
  hide: () => dispatch(actions.searchPopupHide()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);