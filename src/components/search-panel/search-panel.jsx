import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterChange, search } from '../../actions';

import './search-panel.css';

class SearchPanel extends Component {
  state = {
    text: ''
  };

  handleInput = ({ target: { value } }) => {
    this.props.search(value);
    this.setState({
      text: value
    });
  };

  handleStyle = filterName => {
    if (this.props.filter === filterName) {
      return 'btn btn-info';
    } else {
      return 'btn btn-outline-secondary';
    }
  };

  render() {
    const { filterChange } = this.props;

    return (
      <div className='input-group searchPanel'>
        <input
          type='text'
          className='form-control'
          placeholder='Search'
          onChange={this.handleInput}
          value={this.state.text}
        />
        <div className='input-group-append'>
          <input
            type='button'
            className={this.handleStyle('All')}
            value='All'
            onClick={() => filterChange('All')}
          />
          <input
            type='button'
            className={this.handleStyle('Active')}
            value='Active'
            onClick={() => filterChange('Active')}
          />
          <input
            type='button'
            className={this.handleStyle('Complete')}
            value='Complete'
            onClick={() => filterChange('Complete')}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    filter: state.filters.filter
  }),
  { filterChange, search }
)(SearchPanel);
