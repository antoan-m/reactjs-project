import { Component } from 'react';

import "./NewsArticle.css";
import NewsArticleDetails from "./NewsArticleDetails";

import { Link } from 'react-router-dom';


class NewsArticle extends Component {
  // constructor(props) {
  //  super(props)
  // }

render() {
  console.log(this.props); 
  return (
  this.props.newsData.map(x => {
  return (
     <article className="news-list-item" key={x.objectId}>

<Link to={`/news/${x.objectId}`}><img src={x.image} className="news-list-item-image" alt="Under a Firefly Moon (Firefly Lake Book 1)" /></Link>

<article className="news-list-item-details">
<Link to={`/news/${x.objectId}`}><h3 className="news-list-item-title">{x.title}</h3></Link>
<p className="news-list-item-date"><i class="material-icons news-list-item-date-icon">access_time</i>12:32 01.10.2020</p>
<p className="news-list-item-description">{x.description}</p>
</article>
<Link to={`/news/${x.objectId}`}><button className="btn waves-effect waves-light news-list-item-btn">Read more<i class="material-icons right">import_contacts</i></button></Link>

</article>
  )
})
  )}
}

export default NewsArticle;
