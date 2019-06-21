import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    term: '',
  };

  // In order to bind the correct value of 'this', use an arrow function.
  onFormSubmit = e => {
    e.preventDefault();
    const { term } = this.state;
    const { onSubmit } = this.props;

    onSubmit(term);
  };

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-image">
              Image Search
              <input
                type="text"
                id="search-image"
                value={term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
