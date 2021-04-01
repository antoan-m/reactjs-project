import "./News.css";
import { Component } from 'react';
import newsService from '../../services/newsService';
import NewsArticle from "./NewsArticle";
import BooksSidebar from "../Books/BooksSidebar/BooksSidebar"

class News extends Component {
  constructor(props) {
    super();
    this.state = {
      news: []
    };
  }

componentDidMount() {
    newsService.getAllNews()
    .then(news => this.setState({ news }))
  };

render() {

    return (

<article className="news">

<BooksSidebar />

<section className="news-list">

<NewsArticle newsData={this.state.news} />

</section>
  </article>
    ) 
  }

}

export default News;