import "./MySlidesPanel.css";
import { Link } from 'react-router-dom';
import slidesService from "../../../services/slidesService";

function MySlidesPanel(props) {

    function deleteSlideHandler(e, book_id) {
        e.target.parentNode.parentNode.remove();
        slidesService.deleteSlide(book_id);
      }
     
      
  return (
<section className="profile-main-my-slides">
          <h2 className="profile-main-header">My Books</h2>
                <ul className="profile-main-my-slides-list">
                {props.myBooks.map(x => {
                return (
                    <li className="profile-main-my-slides-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-slides-list-item">   
                     <article className="profile-main-my-slides-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-slides-list-item-details">
                         <h5 className="profile-main-my-slides-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-slides-list-item-author">Author: {x.author}</p>
                         <p className="profile-main-my-slides-list-item-category">Category: {x.category}</p>
                         <p className="profile-main-my-slides-list-item-price">Price: {x.price}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-slides-list-item-book-buttons">
                     <Link to={`/slides/details/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     <Link to={`/user/profile/editslide/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">Edit<i className="material-icons right">create</i></button></Link>
                     <button onClick={(e) => {deleteSlideHandler(e, x.objectId)}} type="button" className="btn waves-effect waves-light btn-small delete-book-btn">Delete<i className="material-icons right">delete</i></button>
                     </article>
                    </li>
                  )})}
                </ul>
</section>
  )
}

export default MySlidesPanel;