import "./News.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsArticle from "./NewsArticle";
import BooksSidebar from "../Books/BooksSidebar/BooksSidebar"

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
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

<BooksSidebar />

<section className="news-list">

<NewsArticle newsData={this.state.news} />

</section>
  </article>
    ) 
    }
}

export default News;