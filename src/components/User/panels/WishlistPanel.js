import "./WishlistPanel.css";
import { Link } from 'react-router-dom';
import booksService from "../../../services/booksService";

function WishlistPanel(props) {

    function deleteBookHandler(e, book_id) {
        // e.target.parentNode.parentNode.remove();
        // booksService.deleteBook(book_id);
      }
     
      console.log(props.userData.wishlist)
      
  return (
<section className="profile-main-my-books">
          <h2 className="profile-main-header">My Books</h2>
                
</section>
  )
}

export default WishlistPanel;