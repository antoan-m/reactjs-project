import "./NewsArticle.css";

import { Link } from 'react-router-dom';


function NewsArticle() {
  return (
     <article className="news-list-item" key={111}>

<Link to="/news/asdasdasdasdasd"><img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/50.jpg" className="news-list-item-image" alt="Under a Firefly Moon (Firefly Lake Book 1)" /></Link>

<article className="news-list-item-details">
<Link to="/news/asdasdasdasdasd"><h3 className="news-list-item-title">Test News</h3></Link>
<p className="news-list-item-date"><i class="material-icons news-list-item-date-icon">access_time</i>12:32 01.10.2020</p>
<p className="news-list-item-description">Sample description</p>
<Link to="/news/asdasdasdasdasd"><button className="btn waves-effect waves-light news-list-item-btn">Read more<i class="material-icons right">import_contacts</i></button></Link>
</article>

</article>
  );
}

export default NewsArticle;
