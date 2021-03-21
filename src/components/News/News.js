import "./News.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsArticle from "./NewsArticle";
import Backendless from 'backendless';

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    console.log('mount');
      fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/news`, {
          headers: { 'Access-Control-Allow-Origin': "*" }
  })
          .then(res => res.json())
          .then(news => this.setState({ news }))
          .then(console.log(this.state))
          
  };


  render() {
    return (
<article className="news">
<aside className="books-sidebar">
<section className="books-sidebar-featured-books">
<ul className="books-sidebar-list">
 <li className="books-sidebar-list-title">FEATURED BOOKS</li>
 <Link to="/books/details/asdasdasfasdasf" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 1</li></Link>
 <Link to="/books/details/sdfsdasdfasdf" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 2</li></Link>
 <Link to="/books/details/gerfsdsdfasdfasd" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 3</li></Link>
</ul>
</section>
</aside>

<section className="news-list">

<NewsArticle newsData={this.state.news} />

</section>
  </article>
    ) 
    }
}

export default News;