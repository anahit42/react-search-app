import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { inputChange } from '../../actions';

class SearchBar extends React.Component {
  handleOnInput = (event) => {
    return this.props.onSearchInput(event.target.value);
  };

  render () {
    return (
      <div className='ui search'>
        <div className='ui icon input'>
          <input
            onInput={this.handleOnInput}
            className='prompt'
            placeholder='Search'
            type='text'
          />
          <i className='search icon' />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchInput: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchInput: (input) => {
      const action = inputChange({ q: input, index: 'team' });
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
