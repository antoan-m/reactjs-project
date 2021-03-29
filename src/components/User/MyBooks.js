import "./MyBooks.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import booksService from "../../services/booksService";


class MyBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      my_books: [],
      deleted_book: false,
      user_id: localStorage.getItem('id')
    };
  }

  componentDidMount() {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))

    booksService.getMyBooks(this.state.user_id)
    .then(books => this.setState({ my_books: books }))
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
        userService.userData(this.state.user_id)
        .then(data => this.setState({ user_data: data }))
        }

    if (this.state.my_books === '') {
    booksService.getMyBooks(this.state.user_id)
    .then(books => this.setState({ my_books: books }))
    }
  }


  deleteBookHandler(book_id, e) {
        
    e.target.parentNode.parentNode.remove();

    this.setState({deleted_book: !this.state.deleted_book});
    return booksService.deleteBook(book_id);
  }



  render() {
    console.log(this.state.my_books);
  return (
<div className="profile">

    <section className="profile-main">
        <section className="profile-main-left">
         
          <section className="profile-main-left-last-tasks">
          <h2 className="profile-main-header">Hello, {this.state.user_data.name}</h2>
          <ul className="profile-main-left-last-tasks-list">
                  <Link to={`/user/profile/details/${this.state.user_data.objectId}`}><button className="btn waves-effect waves-light profile-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/orders"><button className="btn waves-effect waves-light profile-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/wishlist"><button className="btn waves-effect waves-light profile-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/reviews"><button className="btn waves-effect waves-light profile-list-item-btn-user">My Reviews<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/user-newsletter"><button className="btn waves-effect waves-light profile-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          <section className="profile-main-my-books">
          <h2 className="profile-main-header">My Books</h2>
                <ul className="profile-main-my-books-list">
                {this.state.my_books.map(x => {
                return (
                    <li className="profile-main-my-books-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-books-list-item-author">Author: {x.author}</p>
                         <p className="profile-main-my-books-list-item-category">Category: {x.category}</p>
                         <p className="profile-main-my-books-list-item-price">Price: {x.price}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-books-list-item-book-buttons">
                     <Link to={`/books/details/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     <Link to={`/user/profile/editbook/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">Edit<i className="material-icons right">create</i></button></Link>
                     <button onClick={this.deleteBookHandler.bind(this, x.objectId)} type="button" className="btn waves-effect waves-light btn-small delete-book-btn">Delete<i className="material-icons right">delete</i></button>
                     </article>
                    </li>
                  )})}
                </ul>
          </section>
          
        </section>
     <section className="profile-main-right">
       <h2 className="profile-main-header">Admin Panel</h2>
                <ul className="profile-main-left-last-admin-list">
                  <li><Link to="/user/profile/mybooks"><button className="btn waves-effect waves-light profile-list-item-btn-admin">My Books<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/addbook"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/mynews"><button className="btn waves-effect waves-light profile-list-item-btn-admin">All News<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/addnews"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Add News<i className="material-icons right">import_contacts</i></button></Link></li>
                </ul>
        </section>

</section>
   </div>
  );
}
}

export default MyBooks;
