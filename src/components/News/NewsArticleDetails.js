import "./NewsArticleDetails.css";
import { Component } from 'react';
import BooksSidebar from "../Books/BooksSidebar/BooksSidebar"

class NewsArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArticleParams : props.match.params,
      newsArticleDetails: {}
  };
}


articleID = this.props.match.params.id;

componentDidMount() {
    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/news/${this.articleID}`, {
        headers: { 'Access-Control-Allow-Origin': "*" }
})
        .then(res => res.json())
        .then(newsArticleDetails => this.setState({ newsArticleDetails }))
        
};

render() {
  return (
   <section className="news-details">

<BooksSidebar />

     <article className="news-article-details">
       <h2 className="news-article-details-title">{this.state.newsArticleDetails.title}</h2>
	   <p className="news-article-details-date"><i className="material-icons news-article-details-date-icon">access_time</i>12:32 01.10.2020</p>
       <article className="news-article-details-image">
         <img src={this.state.newsArticleDetails.image} alt={this.state.newsArticleDetails.title} />
       </article>
         <p className="news-article-details-description">{this.state.newsArticleDetails.short_description}</p>
         <p className="news-article-details-description">{this.state.newsArticleDetails.long_description}</p>
     </article>
   </section>
  );
}
}

export default NewsArticleDetails;