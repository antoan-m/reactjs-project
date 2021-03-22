import "./BooksSidebarAuthors.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksSidebarAuthors extends Component {
//   constructor(props) {
//     super(props)
//   }


render() {
  return (
    this.props.authorsList.map(x => {
    return (
       <Link to={`/books/${x.author}`} exact className="books-sidebar-list-item-link" key={x.author}><li className="books-sidebar-list-item">{x.author.toUpperCase()}</li></Link>
       )
    })
      )}
    }

export default BooksSidebarAuthors;