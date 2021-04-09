import "./MyBooks.css";
import { Component } from 'react';
import userService from "../../services/userService";
import booksService from "../../services/booksService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import MyBooksPanel from "./panels/MyBooksPanel";


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

render() {
    return (
      
<div className="profile">

    <section className="profile-main">

        <UserPanel userData={this.state.user_data} />

        <MyBooksPanel myBooks={this.state.my_books} />

        {/* <AdminPanel userData={this.state.user_data} /> */}

      </section>
    
</div>
  );
}
}

export default MyBooks;
