import React from "react";
import { SEARCH_IMAGES } from "../api";
import { makeFetch, handleInputChange } from "../utils";
import SearchResult from "../components/SearchResult";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      searchQuery: "",
      searchResults: [],
      numberOfResultsToShow: 10
    };
  }

  handleShowMore = e => {
    e.preventDefault();
    this.setState(prevState => ({
      numberOfResultsToShow: prevState.numberOfResultsToShow + 10
    }));
  };

  hasResults = () => this.state.searchResults.length > 0;

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isFetching: true
    });

    makeFetch({
      url: SEARCH_IMAGES,
      params: {
        q: this.state.searchQuery
      },
      onSuccess: response => {
        const allResults = response.collection.items;
        const resultsWithPreview = allResults.filter(result => !!result.links);
        this.setState({
          searchResults: resultsWithPreview,
          numberOfResultsToShow: 10,
          isFetching: false
        });
      },
      onError: () => {
        this.setState({
          isFetching: false
        });
      }
    });
  };

  render() {
    const {
      state: { isFetching, searchQuery, searchResults, numberOfResultsToShow },
      handleSubmit,
      hasResults
    } = this;

    if (isFetching) {
      return <p>Searching...</p>;
    }

    const resultsToDisplay = searchResults.slice(0, numberOfResultsToShow);
    const hasMoreToShow = resultsToDisplay.length < searchResults.length;

    return (
      <div className="page">
        <h3>Search NASA</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter text here"
            className="input-lg"
            type="text"
            value={searchQuery}
            onChange={e => handleInputChange(e, this, "searchQuery")}
          />
          <button date-hover="Search!" type="submit" onClick={handleSubmit}>
            Go
          </button>
        </form>
        {hasResults() ? (
          <div>
            {resultsToDisplay.map(result => (
              <SearchResult result={result} />
            ))}
          </div>
        ) : (
          <p>No results to display</p>
        )}
        {hasResults() && hasMoreToShow && (
          <button onClick={this.handleShowMore}>Show more</button>
        )}
      </div>
    );
  }
}

export default Search;
