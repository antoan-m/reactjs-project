import "./MyBooksPanel.css";
import { Link } from 'react-router-dom';
import booksService from "../../../services/booksService";

function MyBooksPanel(props) {

    function deleteBookHandler(e, book_id) {
        e.target.parentNode.parentNode.remove();
        booksService.deleteBook(book_id);
      }
     
      
  return (
<section className="profile-main-my-books-panel">
          <h2 className="profile-main-header">My Books</h2>
                <ul className="profile-main-my-books-list">
                {props.myBooks.map(x => {
                return (
                    <li className="profile-main-my-books-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-books-list-item-author">{x.author}</p>
                         <p className="profile-main-my-books-list-item-category">{x.category}</p>
                         <p className="profile-main-my-books-list-item-price">{x.price}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-books-list-item-book-buttons">
                     <Link to={`/books/details/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     <Link to={`/user/profile/editbook/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">Edit<i className="material-icons right">create</i></button></Link>
                     <button onClick={(e) => {deleteBookHandler(e, x.objectId)}} type="button" className="btn waves-effect waves-light btn-small delete-book-btn">Delete<i className="material-icons right">delete</i></button>
                     </article>
                    </li>
                  )})}
                </ul>
</section>
  )
}

export default MyBooksPanel;