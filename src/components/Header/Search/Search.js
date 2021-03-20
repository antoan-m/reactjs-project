import './Search.css';

function Search() {
    return(
<article className="header-top-block-site-search">
           <input type="text" id="header-top-block-site-search-input" name="search" placeholder="Search..." />
           <i className="fas fa-search header-top-block-site-search-input-icon"></i>
</article>
    );
}

export default Search;