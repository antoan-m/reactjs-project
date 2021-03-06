import './Search.css';
import { Component } from 'react';
import searchService from '../../../services/searchService';
import React from 'react';
import M from 'materialize-css';
import SearchResults from './SearchResults';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search_results: [],
        search_query: '',
        search_error: '11111',
        display_results: false,
        showSearchPanel: 'none'
    };
  }

  componentDidMount() {

    // searchService.getSearchResults(this.state.search_query)
    // .then(search_results => this.setState({ search_results }))
  };

  componentDidUpdate() {



    }

    changeHandlerSearch(e) {

        this.setState({search_query: e.target.value}, 
            
            function validateSearch() {

            if (this.state.search_query.length < 3) { 
                this.setState({searchError: "Enter more at least 3 characters."}); 
                this.setState({showSearchPanel: false}) 
            }

            if (this.state.search_query === '') { 
                this.setState({searchError: ""});
                this.setState({showSearchPanel: false}) 
        }
          

            searchService.getSearchResults(this.state.search_query)
            .then(search_results => this.setState({ search_results: search_results, showSearchPanel: true }))
            }
        )
    }

    onBlurHandler(e) {
        this.setState({ search_query: '' });
        setTimeout(() => { 
            this.setState({ showSearchPanel: false}) 
        }, 500);
    }

render() {
    return(
        <>
    <article className="header-top-block-site-search">
        <form className="header-top-block-site-search">
           <input type="text" id="header-top-block-site-search-input search" name="search" onChange={this.changeHandlerSearch.bind(this)} onBlur={this.onBlurHandler.bind(this)} value={this.state.search_query} placeholder="Search..." />
        </form>
           <i className="fas fa-search header-top-block-site-search-input-icon"></i>
           <article className="search-result-panel" style={{display: this.state.showSearchPanel}}>
                    { this.state.showSearchPanel && <SearchResults searchData={this.state.search_results} /> }
        </article>
    </article>
    
        <p className="search-error">{this.state.searchData}</p>
        
</>
    );
}
}

export default Search;