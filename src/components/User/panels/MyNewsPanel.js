import "./MyNewsPanel.css";
import { Link } from 'react-router-dom';
import newsService from "../../../services/newsService";

function MyNewsPanel(props) {

    function deleteNewsHandler(e, book_id) {
        e.target.parentNode.parentNode.remove();
        newsService.deleteNews(book_id);
      }
   
      
  return (
<section className="profile-main-my-news">
          <h2 className="profile-main-header">My News</h2>
                <ul className="profile-main-my-news-list">
                {props.myNews.map(x => {
                return (
                    <li className="profile-main-my-news-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-news-list-item">   
                     <article className="profile-main-my-news-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-news-list-item-details">
                         <h5 className="profile-main-my-news-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-news-list-item-author">Created: {new Date(x.created).toLocaleDateString('en', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-news-list-item-book-buttons">
                     <Link to={`/news/details/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     <Link to={`/user/profile/editnews/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">Edit<i className="material-icons right">create</i></button></Link>
                     <button onClick={(e) => {deleteNewsHandler(e, x.objectId)}} type="button" className="btn waves-effect waves-light btn-small delete-book-btn">Delete<i className="material-icons right">delete</i></button>
                     </article>
                    </li>
                  )})}
                </ul>
</section>
  )
}

export default MyNewsPanel;