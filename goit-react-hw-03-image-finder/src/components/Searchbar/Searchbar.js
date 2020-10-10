import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { inputValue: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="styels.Searchbar">
        <form className="styles.searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="styles.SearchForm-button">
            <span className={styles.SearchForm - button - label}>Search</span>
          </button>
          <input
            className={styles.SearchForm - input}
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
